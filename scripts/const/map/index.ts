#!/usr/bin/env node
/**
 * Const Map Registry Generator
 * Сканирует src/lib/{domain}/const/map/** и генерирует
 * src/lib/{domain}/data/json/const/map/index.json для каждого домена.
 *
 * Использование:
 *   npx tsx scripts/const/map/index.ts
 */

import fs from 'fs';
import path from 'path';
import {
	LIB_DIR,
	getDomainsWithConst,
	scanConstFiles,
	findConstExports,
	getValuePos,
	extractSimpleMapEntries
} from '../_utils.js';

const CONST_TYPE = 'map';

interface FileDiagnostic {
	filePath: string;
	exportName: string;
	reason: string;
}

function processFile(filePath: string): {
	tokens: Record<string, Record<string, string | number | boolean | null>>;
	diagnostics: FileDiagnostic[];
} {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	const tokens: Record<string, Record<string, string | number | boolean | null>> = {};
	const diagnostics: FileDiagnostic[] = [];

	for (const { name, pos } of findConstExports(content)) {
		const valuePos = getValuePos(content, pos);
		if (valuePos === null) {
			diagnostics.push({
				filePath,
				exportName: name,
				reason: 'export value was not resolved'
			});
			continue;
		}

		if (content[valuePos] !== '{') {
			diagnostics.push({
				filePath,
				exportName: name,
				reason: `expected object literal, found ${content[valuePos]}`
			});
			continue;
		}

		const entries = extractSimpleMapEntries(content, valuePos);
		if (entries === null) {
			diagnostics.push({
				filePath,
				exportName: name,
				reason: 'object is not a simple key-value map'
			});
			continue;
		}

		tokens[name] = entries;
	}

	return { tokens, diagnostics };
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[const-map] Generating simplified JSON snapshots (Map format)...');
	console.log('='.repeat(60));

	const domains = getDomainsWithConst(CONST_TYPE);

	if (domains.length === 0) {
		console.log('[const-map] No domains with const/map found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with const/map:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;
	let totalDiagnostics = 0;

	for (const domain of domains) {
		const constDir = path.join(LIB_DIR, domain, 'const', CONST_TYPE);
		const files = scanConstFiles(constDir);
		const tokens: Record<string, Record<string, string | number | boolean | null>> = {};
		const diagnostics: FileDiagnostic[] = [];

		for (const filePath of files) {
			const result = processFile(filePath);
			Object.assign(tokens, result.tokens);
			diagnostics.push(...result.diagnostics);
		}

		const tokenCount = Object.keys(tokens).length;
		totalTokens += tokenCount;
		totalDiagnostics += diagnostics.length;

		const outDir = path.join(LIB_DIR, domain, 'data', 'json', 'const', CONST_TYPE);
		fs.mkdirSync(outDir, { recursive: true });
		const outPath = path.join(outDir, 'index.json');

		fs.writeFileSync(outPath, JSON.stringify(tokens, null, 2), 'utf-8');
		console.log(`\n  ${domain}: ${tokenCount} token(s) → ${outPath}`);

		for (const diagnostic of diagnostics) {
			const relativePath = path.relative(LIB_DIR, diagnostic.filePath);
			console.warn(`    [skip] ${relativePath}: ${diagnostic.exportName} (${diagnostic.reason})`);
		}
	}

	console.log('\n' + '='.repeat(60));
	console.log(`[const-map] Done! ${totalTokens} token(s) across ${domains.length} domain(s)`);
	console.log(`[const-map] Skipped invalid exports: ${totalDiagnostics}`);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runConstMapGenerator };
