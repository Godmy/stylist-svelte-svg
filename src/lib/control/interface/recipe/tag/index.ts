import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeTag
	extends StructIntersectAll<[SlotTheme, ChildrenProp, HTMLAttributes<HTMLSpanElement>]> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	label?: string;
	closable?: boolean;
	onClose?: () => void;
	text?: string;
	icon?: Snippet;
	content?: Snippet;
}
