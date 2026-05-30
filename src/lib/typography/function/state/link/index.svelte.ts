import type { ThemeLinkRecipe } from '$stylist/typography/interface/recipe/link';
import { StyleManagerLink } from '$stylist/typography/class/style-manager/link';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export function createLinkState(props: ThemeLinkRecipe) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const underline = $derived(props.underline ?? true);
	const href = $derived(props.href);
	const target = $derived(props.target);
	const text = $derived(props.text);
	const classes = $derived(
		StyleManagerLink.getLinkClasses(
			variant as TokenAppearance,
			size as TokenSize,
			disabled,
			underline,
			props.class ?? ''
		)
	);

	return {
		get classes() {
			return classes;
		},
		get href() {
			return href;
		},
		get target() {
			return target;
		},
		get text() {
			return text;
		}
	};
}

export default createLinkState;
