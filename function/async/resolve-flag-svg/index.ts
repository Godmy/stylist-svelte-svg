import { TOKEN_FLAG_REGISTRY } from '$stylist/svg/const/record/flag-registry';

export async function resolveFlagSvg(code: string): Promise<string | undefined> {
	const loadSvg = TOKEN_FLAG_REGISTRY[code];
	return loadSvg ? loadSvg() : undefined;
}
