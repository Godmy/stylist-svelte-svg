#!/usr/bin/env node
/**
 * Const Enum Registry Generator
 * Сканирует src/lib/{domain}/const/enum/** и генерирует
 * src/lib/{domain}/data/json/const/enum/index.json для каждого домена.
 *
 * Использование:
 *   npx tsx scripts/const/enum/index.ts
 */

import fs from 'fs';
import path from 'path';
import {
	LIB_DIR,
	getDomainsWithConst,
	scanConstFiles,
	findConstExports,
	getValuePos,
	extractArrayValues
} from '../_utils.js';

const CONST_TYPE = 'enum';

interface EnumToken {
	tokenName: string;
	values: Array<string | number | boolean | null>;
	absolutePath: string;
	relativePath: string;
}

interface DomainOutput {
	domainName: string;
	sourceDirectory: string;
	outputFile: string;
	tokens: EnumToken[];
}

interface FileDiagnostic {
	filePath: string;
	exportName: string;
	reason: string;
}

function processFile(filePath: string): {
	tokens: Record<string, Array<string | number | boolean | null>>;
	diagnostics: FileDiagnostic[];
} {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	const tokens: Record<string, Array<string | number | boolean | null>> = {};
	const diagnostics: FileDiagnostic[] = [];

	for (const { name, pos } of findConstExports(content)) {
		if (!name.startsWith('TOKEN')) {
			diagnostics.push({
				filePath,
				exportName: name,
				reason: 'export name must start with TOKEN'
			});
			continue;
		}

		const valuePos = getValuePos(content, pos);
		if (valuePos === null) {
			diagnostics.push({
				filePath,
				exportName: name,
				reason: 'export value was not resolved'
			});
			continue;
		}

		if (content[valuePos] !== '[') {
			diagnostics.push({
				filePath,
				exportName: name,
				reason: `expected array literal, found ${content[valuePos]}`
			});
			continue;
		}

		const values = extractArrayValues(content, valuePos);
		if (values.length === 0 && !/\[\s*\]/.test(content.slice(valuePos, valuePos + 32))) {
			diagnostics.push({
				filePath,
				exportName: name,
				reason: 'array literal did not contain parseable values'
			});
			continue;
		}

		tokens[name] = values;
	}

	return { tokens, diagnostics };
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[const-enum] Generating simplified JSON snapshots...');
	console.log('='.repeat(60));

	const domains = getDomainsWithConst(CONST_TYPE);

	if (domains.length === 0) {
		console.log('[const-enum] No domains with const/enum found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with const/enum:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;
	let totalDiagnostics = 0;

	for (const domain of domains) {
		const constDir = path.join(LIB_DIR, domain, 'const', CONST_TYPE);
		const files = scanConstFiles(constDir);
		const tokens: Record<string, Array<string | number | boolean | null>> = {};
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
	console.log(`[const-enum] Done! ${totalTokens} token(s) across ${domains.length} domain(s)`);
	console.log(`[const-enum] Skipped invalid exports: ${totalDiagnostics}`);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runConstEnumGenerator };
