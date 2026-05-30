import type { SlotAbbr as AbbrProps } from '$stylist/typography/interface/slot/abbr';
import { AbbrStyleManager } from '$stylist/typography/class/style-manager/abbr';

export function createAbbrState(props: AbbrProps) {
	const title = $derived(props.title ?? '');
	const classes = $derived(AbbrStyleManager.getAbbrClasses(props.class ?? ''));

	return {
		get title() {
			return title;
		},
		get classes() {
			return classes;
		}
	};
}

export default createAbbrState;
