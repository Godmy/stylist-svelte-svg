import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeProductSearch
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, IIconSlot, HTMLAttributes<HTMLDivElement>]> {
	placeholder?: string;
	onSearch?: (query: string) => void;
	suggestions?: string[];
	onSuggestionSelect?: (suggestion: string) => void;
}
