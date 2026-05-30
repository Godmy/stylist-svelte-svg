#!/usr/bin/env node
/**
 * Const Single Registry Generator
 * Scans src/lib/{domain}/const/single/** and generates
 * src/lib/{domain}/data/json/const/single/index.json for each domain.
 *
 * Usage:
 *   npx tsx scripts/const/single/index.ts
 */

import fs from 'fs';
import path from 'path';
import {
	LIB_DIR,
	getDomainsWithConst,
	scanConstFiles,
	findConstExports,
	getValuePos,
	extractSingleValue
} from '../_utils.js';

const CONST_TYPE = 'single';

interface FileDiagnostic {
	filePath: string;
	exportName: string;
	reason: string;
}

function processFile(filePath: string): {
	tokens: Record<string, string | number | boolean | null>;
	diagnostics: FileDiagnostic[];
} {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	const tokens: Record<string, string | number | boolean | null> = {};
	const diagnostics: FileDiagnostic[] = [];

	for (const { name, pos } of findConstExports(content)) {
		const valuePos = getValuePos(content, pos);
		if (valuePos === null) {
			diagnostics.push({ filePath, exportName: name, reason: 'export value was not resolved' });
			continue;
		}

		const value = extractSingleValue(content, valuePos);
		if (value === undefined) {
			diagnostics.push({
				filePath,
				exportName: name,
				reason: 'expected primitive literal or Symbol(...)'
			});
			continue;
		}

		tokens[name] = value;
	}

	return { tokens, diagnostics };
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[const-single] Generating simplified JSON snapshots...');
	console.log('='.repeat(60));

	const domains = getDomainsWithConst(CONST_TYPE);
	if (domains.length === 0) {
		console.log('[const-single] No domains with const/single found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with const/single:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;
	let totalDiagnostics = 0;

	for (const domain of domains) {
		const constDir = path.join(LIB_DIR, domain, 'const', CONST_TYPE);
		const files = scanConstFiles(constDir);
		const tokens: Record<string, string | number | boolean | null> = {};
		const diagnostics: FileDiagnostic[] = [];

		for (const filePath of files) {
			const result = processFile(filePath);
			Object.assign(tokens, result.tokens);
			diagnostics.push(...result.diagnostics);
		}

		totalTokens += Object.keys(tokens).length;
		totalDiagnostics += diagnostics.length;

		const outDir = path.join(LIB_DIR, domain, 'data', 'json', 'const', CONST_TYPE);
		fs.mkdirSync(outDir, { recursive: true });
		const outPath = path.join(outDir, 'index.json');

		fs.writeFileSync(outPath, JSON.stringify(tokens, null, 2), 'utf-8');
		console.log(`\n  ${domain}: ${Object.keys(tokens).length} token(s) → ${outPath}`);

		for (const diagnostic of diagnostics) {
			const relativePath = path.relative(LIB_DIR, diagnostic.filePath);
			console.warn(`    [skip] ${relativePath}: ${diagnostic.exportName} (${diagnostic.reason})`);
		}
	}

	console.log('\n' + '='.repeat(60));
	console.log(`[const-single] Done! ${totalTokens} token(s) across ${domains.length} domain(s)`);
	console.log(`[const-single] Skipped invalid exports: ${totalDiagnostics}`);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runConstSingleGenerator };
