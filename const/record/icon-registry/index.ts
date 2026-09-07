const rawIconSvgLoaders = import.meta.glob('../../../data/icon/*/index.svg', {
	query: '?raw',
	import: 'default',
	eager: false
}) as Record<string, () => Promise<string>>;

function extractIconNameFromPath(modulePath: string): string {
	const match = modulePath.match(/\/data\/icon\/([^/]+)\/index\.svg$/);
	return match ? match[1] : modulePath;
}

export const TOKEN_ICON_REGISTRY: Record<string, () => Promise<string>> = Object.fromEntries(
	Object.entries(rawIconSvgLoaders).map(([modulePath, loadSvg]) => [
		extractIconNameFromPath(modulePath),
		loadSvg
	])
);
