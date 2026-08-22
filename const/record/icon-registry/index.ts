const rawIconSvgModules = import.meta.glob('../../../data/icon/*/index.svg', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

function extractIconNameFromPath(modulePath: string): string {
	const match = modulePath.match(/\/data\/icon\/([^/]+)\/index\.svg$/);
	return match ? match[1] : modulePath;
}

export const TOKEN_ICON_REGISTRY: Record<string, string> = Object.fromEntries(
	Object.entries(rawIconSvgModules).map(([modulePath, svg]) => [
		extractIconNameFromPath(modulePath),
		svg
	])
);
