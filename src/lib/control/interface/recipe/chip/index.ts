import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * Chip represents an interactive label.
 *
 * Composition:
 *   ChildrenProp      content surface
 *   ThemeAttributes   HTML and theming attributes
 */
export interface ChipRecipe
	extends StructIntersectAll<[ChildrenProp, ThemeAttributes<HTMLDivElement>]> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	label?: string;
	closable?: boolean;
	onClick?: () => void;
	onClose?: () => void;
}
