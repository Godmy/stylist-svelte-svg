import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * Tag represents a label with optional close behavior.
 *
 * Composition:
 *   ChildrenProp      content surface
 *   ThemeAttributes   HTML and theming attributes
 */
export interface TagRecipe
	extends StructIntersectAll<[ChildrenProp, ThemeAttributes<HTMLSpanElement>]> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	label?: string;
	closable?: boolean;
	onClose?: () => void;
}
