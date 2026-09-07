const rawFlagSvgLoaders = import.meta.glob('../../../data/flag/*/index.svg', {
	query: '?raw',
	import: 'default',
	eager: false
}) as Record<string, () => Promise<string>>;

function extractFlagCodeFromPath(modulePath: string): string {
	const match = modulePath.match(/\/data\/flag\/([^/]+)\/index\.svg$/);
	return match ? match[1] : modulePath;
}

const flagLoadersByCode: Record<string, () => Promise<string>> = Object.fromEntries(
	Object.entries(rawFlagSvgLoaders).map(([modulePath, loadSvg]) => [
		extractFlagCodeFromPath(modulePath),
		loadSvg
	])
);

export const TOKEN_FLAG_REGISTRY: Record<string, () => Promise<string>> = {
	...flagLoadersByCode,
	uk: flagLoadersByCode.gb
};
