const rawFlagSvgModules = import.meta.glob('../../../data/flag/*/index.svg', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

function extractFlagCodeFromPath(modulePath: string): string {
	const match = modulePath.match(/\/data\/flag\/([^/]+)\/index\.svg$/);
	return match ? match[1] : modulePath;
}

const flagsByCode: Record<string, string> = Object.fromEntries(
	Object.entries(rawFlagSvgModules).map(([modulePath, svg]) => [
		extractFlagCodeFromPath(modulePath),
		svg
	])
);

export const TOKEN_FLAG_REGISTRY: Record<string, string> = {
	...flagsByCode,
	uk: flagsByCode.gb
};
