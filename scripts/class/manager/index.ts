#!/usr/bin/env node
/**
 * Class Manager Registry Generator
 * Сканирует src/lib/{domain}/class/manager/** и генерирует
 * src/lib/{domain}/data/json/class/manager/index.json для каждого домена.
 *
 * class/manager — domain-логика: Camera, ThemeManager и т.д.
 *
 * Использование:
 *   npx tsx scripts/class/manager/index.ts
 */

import fs from 'fs';
import path from 'path';
import {
	LIB_DIR,
	getDomainsWithClass,
	scanClassFiles,
	findClasses,
	getClassBodyPos,
	extractPublicMethods
} from '../_utils.js';

const CLASS_CATEGORY = 'manager';

interface ManagerToken {
	className: string;
	methods: string[];
	absolutePath: string;
	relativePath: string;
}

interface DomainOutput {
	domainName: string;
	sourceDirectory: string;
	outputFile: string;
	tokens: ManagerToken[];
}

function processFile(filePath: string, classDir: string): ManagerToken[] {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	const tokens: ManagerToken[] = [];
	const relativePath = path.relative(classDir, filePath);

	for (const { name, pos } of findClasses(content)) {
		const bodyPos = getClassBodyPos(content, pos);
		const methods = bodyPos !== null ? extractPublicMethods(content, bodyPos) : [];
		tokens.push({ className: name, methods, absolutePath: filePath, relativePath });
	}

	return tokens;
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[class-manager] Generating JSON snapshots...');
	console.log('='.repeat(60));

	const domains = getDomainsWithClass(CLASS_CATEGORY);

	if (domains.length === 0) {
		console.log('[class-manager] No domains with class/manager found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with class/manager:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;

	for (const domain of domains) {
		const classDir = path.join(LIB_DIR, domain, 'class', CLASS_CATEGORY);
		const files = scanClassFiles(classDir);
		const tokens: ManagerToken[] = [];

		for (const filePath of files) {
			tokens.push(...processFile(filePath, classDir));
		}

		totalTokens += tokens.length;

		const outDir = path.join(LIB_DIR, domain, 'data', 'json', 'class', CLASS_CATEGORY);
		fs.mkdirSync(outDir, { recursive: true });
		const outPath = path.join(outDir, 'index.json');

		const output: DomainOutput = {
			domainName: domain,
			sourceDirectory: classDir,
			outputFile: outPath,
			tokens
		};

		fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8');
		console.log(`\n  ${domain}: ${tokens.length} class(es) → ${outPath}`);
	}

	console.log('\n' + '='.repeat(60));
	console.log(`[class-manager] Done! ${totalTokens} class(es) across ${domains.length} domain(s)`);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runClassManagerGenerator };
