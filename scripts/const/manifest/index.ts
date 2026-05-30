#!/usr/bin/env node
/**
 * Const Manifest Registry Generator
 * Scans src/lib/{domain}/const/manifest/** and generates
 * src/lib/{domain}/data/json/const/manifest/index.json for each domain.
 *
 * Usage:
 *   npx tsx scripts/const/manifest/index.ts
 */

import fs from 'fs';
import path from 'path';
import {
	LIB_DIR,
	getDomainsWithConst,
	scanConstFiles,
	findConstExports,
	getValuePos,
	SerializableValue
} from '../_utils.js';

const CONST_TYPE = 'manifest';

interface FileDiagnostic {
	filePath: string;
	exportName: string;
	reason: string;
}

interface ImportBinding {
	sourcePath: string;
	importedName: string;
	localName: string;
}

function processFile(filePath: string): {
	tokens: Record<string, SerializableValue>;
	diagnostics: FileDiagnostic[];
} {
	const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
	const tokens: Record<string, SerializableValue> = {};
	const diagnostics: FileDiagnostic[] = [];
	const bindings = extractImportBindings(content);
	const registry = buildImportRegistry(bindings);

	for (const { name, pos } of findConstExports(content)) {
		const valuePos = getValuePos(content, pos);
		if (valuePos === null || content[valuePos] !== '{') {
			diagnostics.push({
				filePath,
				exportName: name,
				reason: 'manifest export must be an object literal'
			});
			continue;
		}

		const objectSource = sliceBalanced(content, valuePos, '{', '}');
		if (!objectSource) {
			diagnostics.push({ filePath, exportName: name, reason: 'manifest object was not parsed' });
			continue;
		}

		const resolved = resolveExpression(objectSource, registry);
		if (
			resolved === undefined ||
			typeof resolved !== 'object' ||
			Array.isArray(resolved) ||
			resolved === null
		) {
			diagnostics.push({
				filePath,
				exportName: name,
				reason: 'manifest object contains unresolved or non-serializable references'
			});
			continue;
		}

		tokens[name] = resolved;
	}

	return { tokens, diagnostics };
}

function extractImportBindings(content: string): ImportBinding[] {
	const bindings: ImportBinding[] = [];
	const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g;
	let match: RegExpExecArray | null;

	while ((match = importRegex.exec(content)) !== null) {
		const names = match[1]
			.split(',')
			.map((part) => part.trim())
			.filter(Boolean);
		for (const entry of names) {
			const parts = entry.split(/\s+as\s+/);
			bindings.push({
				sourcePath: match[2],
				importedName: parts[0].trim(),
				localName: (parts[1] ?? parts[0]).trim()
			});
		}
	}

	return bindings;
}

function buildImportRegistry(bindings: ImportBinding[]): Record<string, SerializableValue> {
	const registry: Record<string, SerializableValue> = {};
	for (const binding of bindings) {
		const resolved = resolveImportedConst(binding.sourcePath, binding.importedName);
		if (resolved !== undefined) {
			registry[binding.localName] = resolved;
		}
	}
	return registry;
}

function resolveImportedConst(
	importPath: string,
	importedName: string
): SerializableValue | undefined {
	const match = importPath.match(/\$stylist\/([^/]+)\/const\/([^/]+)\//);
	if (!match) return undefined;

	const [, domain, joint] = match;
	const jsonPath = path.join(LIB_DIR, domain, 'data', 'json', 'const', joint, 'index.json');
	if (!fs.existsSync(jsonPath)) return undefined;

	try {
		const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) as Record<
			string,
			SerializableValue
		>;
		return data[importedName];
	} catch {
		return undefined;
	}
}

function resolveExpression(
	expression: string,
	registry: Record<string, SerializableValue>
): SerializableValue | undefined {
	const source = expression
		.trim()
		.replace(/\s+as\s+const$/, '')
		.trim();

	if (source.startsWith('{')) {
		const body = source.slice(1, -1).trim();
		const result: Record<string, SerializableValue> = {};
		if (!body) return result;

		for (const entry of splitTopLevel(body)) {
			const colonIndex = findTopLevelColon(entry);
			if (colonIndex === -1) return undefined;
			const key = normalizeKey(entry.slice(0, colonIndex).trim());
			const valueSource = entry.slice(colonIndex + 1).trim();
			const value = resolveExpression(valueSource, registry);
			if (!key || value === undefined) return undefined;
			result[key] = value;
		}

		return result;
	}

	if (source.startsWith('[')) {
		const body = source.slice(1, -1).trim();
		if (!body) return [];
		const items: SerializableValue[] = [];
		for (const part of splitTopLevel(body)) {
			const resolved = resolveExpression(part.trim(), registry);
			if (resolved === undefined) return undefined;
			items.push(resolved);
		}
		return items;
	}

	if (
		(source.startsWith("'") && source.endsWith("'")) ||
		(source.startsWith('"') && source.endsWith('"'))
	) {
		return source.slice(1, -1);
	}
	if (source === 'true') return true;
	if (source === 'false') return false;
	if (source === 'null') return null;
	if (/^-?\d+(\.\d+)?$/.test(source)) return Number(source);
	if (registry[source] !== undefined) return registry[source];

	return undefined;
}

function sliceBalanced(
	content: string,
	start: number,
	open: string,
	close: string
): string | undefined {
	let depth = 0;
	let inStr = false;
	let strCh = '';

	for (let index = start; index < content.length; index++) {
		const char = content[index];
		if (inStr) {
			if (char === '\\') {
				index++;
				continue;
			}
			if (char === strCh) inStr = false;
			continue;
		}
		if (char === '"' || char === "'" || char === '`') {
			inStr = true;
			strCh = char;
			continue;
		}
		if (char === open) depth++;
		else if (char === close) {
			depth--;
			if (depth === 0) return content.slice(start, index + 1);
		}
	}

	return undefined;
}

function splitTopLevel(source: string): string[] {
	const parts: string[] = [];
	let start = 0;
	let braceDepth = 0;
	let bracketDepth = 0;
	let parenDepth = 0;
	let inStr = false;
	let strCh = '';

	for (let index = 0; index < source.length; index++) {
		const char = source[index];
		if (inStr) {
			if (char === '\\') {
				index++;
				continue;
			}
			if (char === strCh) inStr = false;
			continue;
		}
		if (char === '"' || char === "'" || char === '`') {
			inStr = true;
			strCh = char;
			continue;
		}
		if (char === '{') braceDepth++;
		else if (char === '}') braceDepth--;
		else if (char === '[') bracketDepth++;
		else if (char === ']') bracketDepth--;
		else if (char === '(') parenDepth++;
		else if (char === ')') parenDepth--;
		else if (char === ',' && braceDepth === 0 && bracketDepth === 0 && parenDepth === 0) {
			const part = source.slice(start, index).trim();
			if (part) parts.push(part);
			start = index + 1;
		}
	}

	const tail = source.slice(start).trim();
	if (tail) parts.push(tail);
	return parts;
}

function findTopLevelColon(source: string): number {
	let braceDepth = 0;
	let bracketDepth = 0;
	let parenDepth = 0;
	let inStr = false;
	let strCh = '';

	for (let index = 0; index < source.length; index++) {
		const char = source[index];
		if (inStr) {
			if (char === '\\') {
				index++;
				continue;
			}
			if (char === strCh) inStr = false;
			continue;
		}
		if (char === '"' || char === "'" || char === '`') {
			inStr = true;
			strCh = char;
			continue;
		}
		if (char === '{') braceDepth++;
		else if (char === '}') braceDepth--;
		else if (char === '[') bracketDepth++;
		else if (char === ']') bracketDepth--;
		else if (char === '(') parenDepth++;
		else if (char === ')') parenDepth--;
		else if (char === ':' && braceDepth === 0 && bracketDepth === 0 && parenDepth === 0) {
			return index;
		}
	}

	return -1;
}

function normalizeKey(source: string): string | undefined {
	if (/^\w+$/.test(source)) return source;
	if (
		(source.startsWith("'") && source.endsWith("'")) ||
		(source.startsWith('"') && source.endsWith('"'))
	) {
		return source.slice(1, -1);
	}
	return undefined;
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[const-manifest] Generating simplified JSON snapshots...');
	console.log('='.repeat(60));

	const domains = getDomainsWithConst(CONST_TYPE);
	if (domains.length === 0) {
		console.log('[const-manifest] No domains with const/manifest found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with const/manifest:`);
	for (const d of domains) console.log(`  - ${d}`);

	let totalTokens = 0;
	let totalDiagnostics = 0;

	for (const domain of domains) {
		const constDir = path.join(LIB_DIR, domain, 'const', CONST_TYPE);
		const files = scanConstFiles(constDir);
		const tokens: Record<string, SerializableValue> = {};
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
	console.log(`[const-manifest] Done! ${totalTokens} token(s) across ${domains.length} domain(s)`);
	console.log(`[const-manifest] Skipped invalid exports: ${totalDiagnostics}`);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runConstManifestGenerator };
