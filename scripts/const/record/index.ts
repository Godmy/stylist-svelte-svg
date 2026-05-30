#!/usr/bin/env node
/**
 * Const Record Registry Generator
 * Сканирует src/lib/{domain}/const/record/** и генерирует
 * src/lib/{domain}/data/json/const/record/index.json для каждого домена.
 *
 * Использование:
 *   npx tsx scripts/const/record/index.ts
 */

import fs from 'fs';
import path from 'path';
import {
	LIB_DIR,
	getDomainsWithConst,
	scanConstFiles,
	findConstExports,
	getValuePos,
	extractMapEntries
} from '../_utils.js';

const CONST_TYPE = 'record';

interface RecordToken {
	tokenName: string;
	keys: string[];
	absolutePath: string;
	relativePath: string;
}

interface DomainOutput {
	domainName: string;
	sourceDirectory: string;
	outputFile: string;
	tokens: RecordToken[];
}

function processFile(filePath: string): Record<string, Record<string, unknown>> {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	const tokens: Record<string, Record<string, unknown>> = {};

	for (const { name, pos } of findConstExports(content)) {
		const valuePos = getValuePos(content, pos);
		if (valuePos === null || content[valuePos] !== '{') continue;

		const entries = extractMapEntries(content, valuePos) as Record<string, unknown>;
		if (Object.keys(entries).length === 0) continue;

		tokens[name] = entries;
	}

	return tokens;
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[const-record] Generating simplified JSON snapshots (Record format)...');
	console.log('='.repeat(60));

	const domains = getDomainsWithConst(CONST_TYPE);

	if (domains.length === 0) {
		console.log('[const-record] No domains with const/record found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with const/record:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;

	for (const domain of domains) {
		const constDir = path.join(LIB_DIR, domain, 'const', CONST_TYPE);
		const files = scanConstFiles(constDir);
		const tokens: Record<string, Record<string, string>> = {};

		for (const filePath of files) {
			Object.assign(tokens, processFile(filePath));
		}

		const tokenCount = Object.keys(tokens).length;
		totalTokens += tokenCount;

		const outDir = path.join(LIB_DIR, domain, 'data', 'json', 'const', CONST_TYPE);
		fs.mkdirSync(outDir, { recursive: true });
		const outPath = path.join(outDir, 'index.json');

		fs.writeFileSync(outPath, JSON.stringify(tokens, null, 2), 'utf-8');
		console.log(`\n  ${domain}: ${tokenCount} token(s) → ${outPath}`);
	}

	console.log('\n' + '='.repeat(60));
	console.log(`[const-record] Done! ${totalTokens} token(s) across ${domains.length} domain(s)`);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runConstRecordGenerator };
