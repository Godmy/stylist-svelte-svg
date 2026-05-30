#!/usr/bin/env node
/**
 * Interface Recipe Registry Generator
 * Сканирует src/lib/{domain}/interface/recipe/** и генерирует
 * src/lib/{domain}/data/json/interface/recipe/index.json для каждого домена.
 *
 * interface/recipe — LEGO-compositions: ButtonRecipe, CardRecipe, BorderRecipe и т.д.
 *
 * Использование:
 *   npx tsx scripts/interface/recipe/index.ts
 */

import fs from 'fs';
import path from 'path';
import {
	LIB_DIR,
	getDomainsWithInterface,
	scanInterfaceFiles,
	findInterfaces,
	getInterfaceBodyPos,
	extractInterfaceKeys
} from '../_utils.js';

const IFACE_CATEGORY = 'recipe';

function processFile(filePath: string): Record<string, string[]> {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	const tokens: Record<string, string[]> = {};

	for (const { name, pos } of findInterfaces(content)) {
		const bodyPos = getInterfaceBodyPos(content, pos);
		tokens[name] = bodyPos !== null ? extractInterfaceKeys(content, bodyPos) : [];
	}

	return tokens;
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[interface-recipe] Generating simplified JSON snapshots (Field Names only)...');
	console.log('='.repeat(60));

	const domains = getDomainsWithInterface(IFACE_CATEGORY);

	if (domains.length === 0) {
		console.log('[interface-recipe] No domains with interface/recipe found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with interface/recipe:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;

	for (const domain of domains) {
		const ifaceDir = path.join(LIB_DIR, domain, 'interface', IFACE_CATEGORY);
		const files = scanInterfaceFiles(ifaceDir);
		const tokens: Record<string, string[]> = {};

		for (const filePath of files) {
			Object.assign(tokens, processFile(filePath));
		}

		const tokenCount = Object.keys(tokens).length;
		totalTokens += tokenCount;

		const outDir = path.join(LIB_DIR, domain, 'data', 'json', 'interface', IFACE_CATEGORY);
		fs.mkdirSync(outDir, { recursive: true });
		const outPath = path.join(outDir, 'index.json');

		fs.writeFileSync(outPath, JSON.stringify(tokens, null, 2), 'utf-8');
		console.log(`\n  ${domain}: ${tokenCount} interface(s) → ${outPath}`);
	}

	console.log('\n' + '='.repeat(60));
	console.log(
		`[interface-recipe] Done! ${totalTokens} interface(s) across ${domains.length} domain(s)`
	);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runInterfaceRecipeGenerator };
