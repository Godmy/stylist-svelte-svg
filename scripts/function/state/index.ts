#!/usr/bin/env node
/**
 * Function State Registry Generator
 * Сканирует src/lib/{domain}/function/state/** и генерирует
 * src/lib/{domain}/data/json/function/state/index.json для каждого домена.
 *
 * function/state — Svelte 5 state-функции (useXxx / createXxxState),
 * возвращающие объект с геттерами и методами.
 *
 * Использование:
 *   npx tsx scripts/function/state/index.ts
 */

import fs from 'fs';
import path from 'path';
import {
	LIB_DIR,
	getDomainsWithFunction,
	scanStateFiles,
	findFunctions,
	extractReturnMembers
} from '../_utils.js';

const FUNC_CATEGORY = 'state';

function processFile(filePath: string): Record<string, string[]> {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	const tokens: Record<string, string[]> = {};

	for (const { name } of findFunctions(content)) {
		tokens[name] = extractReturnMembers(content);
	}

	return tokens;
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[function-state] Generating simplified JSON snapshots (State Functions)...');
	console.log('='.repeat(60));

	const domains = getDomainsWithFunction(FUNC_CATEGORY);

	if (domains.length === 0) {
		console.log('[function-state] No domains with function/state found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with function/state:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;

	for (const domain of domains) {
		const funcDir = path.join(LIB_DIR, domain, 'function', FUNC_CATEGORY);
		const files = scanStateFiles(funcDir);
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
		`[function-state] Done! ${totalTokens} function(s) across ${domains.length} domain(s)`
	);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runFunctionStateGenerator };
