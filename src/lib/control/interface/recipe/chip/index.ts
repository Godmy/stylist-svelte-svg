import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeChip
	extends ComputeIntersectAll<[SlotTheme, ChildrenProp, HTMLAttributes<HTMLDivElement>]> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	label?: string;
	closable?: boolean;
	onClick?: () => void;
	onClose?: () => void;
	text?: string;
	icon?: Snippet;
	content?: Snippet;
}
