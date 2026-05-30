#!/usr/bin/env node
/**
 * Function Script Registry Generator
 * Сканирует src/lib/{domain}/function/script/** и генерирует
 * src/lib/{domain}/data/json/function/script/index.json для каждого домена.
 *
 * function/script — утилитарные функции (pure functions, helpers, resolvers и т.д.).
 *
 * Использование:
 *   npx tsx scripts/function/script/index.ts
 */

import fs from 'fs';
import path from 'path';
import {
	LIB_DIR,
	getDomainsWithFunction,
	scanScriptFiles,
	findFunctions,
	extractFunctionParams
} from '../_utils.js';

const FUNC_CATEGORY = 'script';

function processFile(filePath: string): Record<string, string[]> {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	const tokens: Record<string, string[]> = {};

	for (const { name, pos } of findFunctions(content)) {
		tokens[name] = extractFunctionParams(content, pos);
	}

	return tokens;
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[function-script] Generating simplified JSON snapshots (Script Functions)...');
	console.log('='.repeat(60));

	const domains = getDomainsWithFunction(FUNC_CATEGORY);

	if (domains.length === 0) {
		console.log('[function-script] No domains with function/script found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with function/script:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;

	for (const domain of domains) {
		const funcDir = path.join(LIB_DIR, domain, 'function', FUNC_CATEGORY);
		const files = scanScriptFiles(funcDir);
		const tokens: Record<string, string[]> = {};

		for (const filePath of files) {
			Object.assign(tokens, processFile(filePath));
		}

		const tokenCount = Object.keys(tokens).length;
		totalTokens += tokenCount;

		const outDir = path.join(LIB_DIR, domain, 'data', 'json', 'function', FUNC_CATEGORY);
		fs.mkdirSync(outDir, { recursive: true });
		const outPath = path.join(outDir, 'index.json');

		fs.writeFileSync(outPath, JSON.stringify(tokens, null, 2), 'utf-8');
		console.log(`\n  ${domain}: ${tokenCount} function(s) → ${outPath}`);
	}

	console.log('\n' + '='.repeat(60));
	console.log(
		`[function-script] Done! ${totalTokens} function(s) across ${domains.length} domain(s)`
	);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runFunctionScriptGenerator };
