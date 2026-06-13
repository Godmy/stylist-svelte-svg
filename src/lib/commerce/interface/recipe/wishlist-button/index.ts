import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeWishlistButton
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, IIconSlot, IBadgeSlot, HTMLAttributes<HTMLButtonElement>]
	> {
	inWishlist?: boolean;
	buttonClass?: string;
	showLabel?: boolean;
	disabled?: boolean;
	onToggle?: (inWishlist: boolean) => void;
	onSuccess?: () => void;
	onError?: (error: Error) => void;
}
