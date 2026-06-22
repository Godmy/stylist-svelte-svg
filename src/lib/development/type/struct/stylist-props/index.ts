import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { StylistCategoryId } from '$stylist/development/type/struct/stylist-category-id';
import type { StylistSelection } from '$stylist/development/type/struct/stylist-selection';

export type StylistProps = Omit<HTMLAttributes<HTMLDivElement> & SlotInteraction, 'class'> & {
	initialCategory?: StylistCategoryId;
	class?: string;
	onSelectionChange?: (selection: StylistSelection) => void;
};
