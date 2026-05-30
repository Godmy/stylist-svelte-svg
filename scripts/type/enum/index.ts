#!/usr/bin/env node
/**
 * Type Enum Registry Generator
 * Сканирует src/lib/{domain}/type/enum/** и генерирует
 * src/lib/{domain}/data/json/type/enum/index.json для каждого домена.
 *
 * Использование:
 *   npx tsx scripts/type/enum/index.ts
 */

import fs from 'fs';
import path from 'path';
import { LIB_DIR, getDomainsWithType, scanTypeFiles, findTypeAliases } from '../_utils.js';

const TYPE_CATEGORY = 'enum';

interface EnumTypeToken {
	typeName: string;
	absolutePath: string;
	relativePath: string;
}

interface DomainOutput {
	domainName: string;
	sourceDirectory: string;
	outputFile: string;
	tokens: EnumTypeToken[];
}

function processFile(filePath: string, typeDir: string): EnumTypeToken[] {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	return findTypeAliases(content).map(({ name }) => ({
		typeName: name,
		absolutePath: filePath,
		relativePath: path.relative(typeDir, filePath)
	}));
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[type-enum] Generating JSON snapshots...');
	console.log('='.repeat(60));

	const domains = getDomainsWithType(TYPE_CATEGORY);

	if (domains.length === 0) {
		console.log('[type-enum] No domains with type/enum found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with type/enum:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;

	for (const domain of domains) {
		const typeDir = path.join(LIB_DIR, domain, 'type', TYPE_CATEGORY);
		const files = scanTypeFiles(typeDir);
		const tokens: EnumTypeToken[] = [];

		for (const filePath of files) {
			tokens.push(...processFile(filePath, typeDir));
		}

		totalTokens += tokens.length;

		const outDir = path.join(LIB_DIR, domain, 'data', 'json', 'type', TYPE_CATEGORY);
		fs.mkdirSync(outDir, { recursive: true });
		const outPath = path.join(outDir, 'index.json');

		const output: DomainOutput = {
			domainName: domain,
			sourceDirectory: typeDir,
			outputFile: outPath,
			tokens
		};

		fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8');
		console.log(`\n  ${domain}: ${tokens.length} type(s) → ${outPath}`);
	}

	console.log('\n' + '='.repeat(60));
	console.log(`[type-enum] Done! ${totalTokens} type(s) across ${domains.length} domain(s)`);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runTypeEnumGenerator };
