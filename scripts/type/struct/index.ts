#!/usr/bin/env node
/**
 * Type Struct Registry Generator
 * Сканирует src/lib/{domain}/type/struct/** и генерирует
 * src/lib/{domain}/data/json/type/struct/index.json для каждого домена.
 *
 * Обрабатывает:
 *   export type Foo = { ... }          → typeName + keys
 *   export type Foo = { ... } & Bar    → typeName + keys (из первого блока)
 *   export interface Foo extends Bar   → typeName + keys
 *   export type Foo = 'a' | 'b'        → typeName (без keys)
 *   export type Foo = Partial<Bar>     → typeName (без keys)
 *
 * Использование:
 *   npx tsx scripts/type/struct/index.ts
 */

import fs from 'fs';
import path from 'path';
import {
	LIB_DIR,
	getDomainsWithType,
	scanTypeFiles,
	findTypeAliases,
	findInterfaces,
	getTypeBodyPos,
	extractTypeKeys
} from '../_utils.js';

const TYPE_CATEGORY = 'struct';

function processFile(filePath: string): Record<string, string[]> {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	const tokens: Record<string, string[]> = {};

	// export type Name = { ... }
	for (const { name, pos } of findTypeAliases(content)) {
		const bodyPos = getTypeBodyPos(content, pos, 'type');
		tokens[name] = bodyPos !== null ? extractTypeKeys(content, bodyPos) : [];
	}

	// export interface Name { ... }
	for (const { name, pos } of findInterfaces(content)) {
		const bodyPos = getTypeBodyPos(content, pos, 'interface');
		tokens[name] = bodyPos !== null ? extractTypeKeys(content, bodyPos) : [];
	}

	return tokens;
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[type-struct] Generating simplified JSON snapshots (Type/Struct format)...');
	console.log('='.repeat(60));

	const domains = getDomainsWithType(TYPE_CATEGORY);

	if (domains.length === 0) {
		console.log('[type-struct] No domains with type/struct found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with type/struct:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;

	for (const domain of domains) {
		const typeDir = path.join(LIB_DIR, domain, 'type', TYPE_CATEGORY);
		const files = scanTypeFiles(typeDir);
		const tokens: Record<string, string[]> = {};

		for (const filePath of files) {
			Object.assign(tokens, processFile(filePath));
		}

		const tokenCount = Object.keys(tokens).length;
		totalTokens += tokenCount;

		const outDir = path.join(LIB_DIR, domain, 'data', 'json', 'type', TYPE_CATEGORY);
		fs.mkdirSync(outDir, { recursive: true });
		const outPath = path.join(outDir, 'index.json');

		fs.writeFileSync(outPath, JSON.stringify(tokens, null, 2), 'utf-8');
		console.log(`\n  ${domain}: ${tokenCount} type(s) → ${outPath}`);
	}

	console.log('\n' + '='.repeat(60));
	console.log(`[type-struct] Done! ${totalTokens} type(s) across ${domains.length} domain(s)`);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runTypeStructGenerator };
