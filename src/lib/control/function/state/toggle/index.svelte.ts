import type { HTMLInputAttributes } from 'svelte/elements';
import type { RecipeToggle } from '$stylist/control/interface/recipe/toggle';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export function createToggleState(props: RecipeToggle & HTMLInputAttributes) {
	const size = $derived((props.size ?? 'md') as TokenSize);
	const disabled = $derived(props.disabled ?? false);
	const checked = $derived(props.checked ?? false);
	const ariaLabel = $derived(props.ariaLabel ?? 'SlotToggle');

	return {
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get checked() {
			return checked;
		},
		get ariaLabel() {
			return ariaLabel;
		}
	};
}
