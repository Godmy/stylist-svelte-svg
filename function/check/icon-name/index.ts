import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';
import type { TokenIconName } from '$stylist/svg/type/alias/icon-name';

/** Narrows a name from data (database, config, preset) to an existing icon file. */
export function isIconName(value: unknown): value is TokenIconName {
	return typeof value === 'string' && Object.hasOwn(TOKEN_ICON_REGISTRY, value);
}
