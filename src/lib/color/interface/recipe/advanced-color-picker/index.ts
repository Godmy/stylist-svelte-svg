import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export interface RecipeThemeAdvancedColorPicker
	extends ComputeIntersectAll<[InteractionHTMLAttributes<HTMLDivElement>]> {
	value?: string;
	disabled?: boolean;
	showInput?: boolean;
	showPalette?: boolean;
	onInput?: (value: string) => void;
	onChange?: (value: string) => void;
	class?: string;
}
