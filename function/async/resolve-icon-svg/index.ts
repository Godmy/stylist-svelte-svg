import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';

export async function resolveIconSvg(name: string): Promise<string> {
	const loadSvg = TOKEN_ICON_REGISTRY[name] ?? TOKEN_ICON_REGISTRY.box;
	return loadSvg ? loadSvg() : '';
}
