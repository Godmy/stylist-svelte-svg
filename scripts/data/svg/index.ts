#!/usr/bin/env node
/**
 * SVG Registry Generator.
 *
 * Usage:
 *   npx tsx scripts/data/svg/index.ts
 *
 * Reads SVG files from src/lib/{domain}/data/svg/ and writes:
 *   - media/const/record/icon-registry/index.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../../..');
const LIB_DIR = path.resolve(ROOT_DIR, 'src/lib');

function getDomainsWithSvg(): string[] {
	const entries = fs.readdirSync(LIB_DIR, { withFileTypes: true });
	const domains: string[] = [];

	for (const entry of entries) {
		if (!entry.isDirectory()) continue;
		if (entry.name === 'json') continue;

		const svgDir = path.join(LIB_DIR, entry.name, 'data', 'svg');
		if (fs.existsSync(svgDir)) {
			domains.push(entry.name);
		}
	}

	return domains.sort();
}

function getSvgEntries(svgDir: string): Array<{ name: string; svg: string }> {
	if (!fs.existsSync(svgDir)) return [];

	return fs
		.readdirSync(svgDir)
		.filter((file) => file.endsWith('.svg'))
		.sort()
		.map((file) => ({
			name: file.replace(/\.svg$/, ''),
			svg: fs.readFileSync(path.join(svgDir, file), 'utf-8').trim()
		}));
}

function escapeTemplateLiteral(value: string): string {
	return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function generateMediaIconRegistry(
	registryEntries: Array<{ name: string; svg: string; domain: string }>
): string {
	const items = registryEntries
		.map(({ name, svg, domain }) => `\t'${name}': \`${escapeTemplateLiteral(svg)}\`, // ${domain}`)
		.join(',\n');

	return `export const TOKEN_ICON_REGISTRY = {
${items}
} as const;
`;
}

async function main(): Promise<void> {
	console.log('='.repeat(60));
	console.log('[svg-registry] Generating global icon registry...');
	console.log('='.repeat(60));

	const domains = getDomainsWithSvg();

	if (domains.length === 0) {
		console.log('[svg-registry] No domains with data/svg found.');
		return;
	}

	console.log(`\nFound ${domains.length} domain(s) with data/svg:`);
	for (const domain of domains) {
		console.log(`  - ${domain}`);
	}

	let totalIcons = 0;
	const globalRegistry = new Map<string, { svg: string; domain: string }>();
	const duplicateIcons = new Map<string, string[]>();

	for (const domain of domains) {
		const svgDir = path.join(LIB_DIR, domain, 'data', 'svg');
		const svgEntries = getSvgEntries(svgDir);
		totalIcons += svgEntries.length;

		for (const entry of svgEntries) {
			if (!globalRegistry.has(entry.name)) {
				globalRegistry.set(entry.name, { svg: entry.svg, domain });
				continue;
			}

			const seenDomains = duplicateIcons.get(entry.name) ?? [
				globalRegistry.get(entry.name)!.domain
			];
			seenDomains.push(domain);
			duplicateIcons.set(entry.name, seenDomains);
		}
	}

	const mediaRegistryDir = path.join(LIB_DIR, 'media', 'const', 'record', 'icon-registry');
	fs.mkdirSync(mediaRegistryDir, { recursive: true });
	const mediaRegistryPath = path.join(mediaRegistryDir, 'index.ts');
	fs.writeFileSync(
		mediaRegistryPath,
		generateMediaIconRegistry(
			Array.from(globalRegistry.entries()).map(([name, value]) => ({
				name,
				svg: value.svg,
				domain: value.domain
			}))
		),
		'utf-8'
	);
	console.log(`  [record] media -> ${mediaRegistryPath}`);

	if (duplicateIcons.size > 0) {
		console.log(
			'\n[svg-registry] Duplicate icon names detected; keeping first domain encountered:'
		);
		for (const [iconName, seenDomains] of duplicateIcons.entries()) {
			console.log(`  - ${iconName}: ${seenDomains.join(', ')}`);
		}
	}

	console.log('='.repeat(60));
	console.log(
		`[svg-registry] Done! Total: ${totalIcons} icon(s) across ${domains.length} domain(s)`
	);
	console.log('='.repeat(60));
}

main().catch(console.error);

export { main as runSvgRegistryGenerator };
