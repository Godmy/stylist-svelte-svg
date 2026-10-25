import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/typography/interface/slot/typography';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TOKEN_SIZE } from '$stylist/design-token/const/array/size';
import type { SlotSvgName } from '$stylist/svg/interface/slot/svg-name';
import type { TokenIconSize } from '$stylist/svg/type/alias/icon-size';
import type { TokenColorTone } from '$stylist/design-token/type/alias/color-tone';
import type { TokenShape } from '$stylist/design-token/type/alias/shape';
export interface RecipeIcon extends ComputeIntersectAll<
	[Partial<SlotSvgName>, SlotThemeBorder, SlotTypography]
> {
	/** Icon size: a TOKEN_ICON_SIZE token or pixels; defaults to `md` (20px) */
	size?: TokenIconSize;
	/** Stroke width */
	strokeWidth?: number;
	/** Icon variant */
	variant?: TokenColorTone;
	/** Turns chevron icons up (open) or down (closed) */
	isOpen?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Container type */
	container?: 'none' | 'wrapper' | 'circle';
	/** Container size */
	containerSize?: Extract<(typeof TOKEN_SIZE)[number], 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>;
	/** Container shape */
	shape?: TokenShape;
	/** Icon color */
	color?: string;
	/** Filled */
	filled?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Container CSS class */
	containerClass?: string;
	/** Accessible label */
	'aria-label'?: string;
}
