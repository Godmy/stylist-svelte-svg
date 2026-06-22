import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { StylistCategoryId } from '$stylist/development/type/struct/stylist-category-id';
import type { StylistSelection } from '$stylist/development/type/struct/stylist-selection';

export interface SlotStylist extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotInteraction {
	initialCategory?: StylistCategoryId;
	class?: string;
	onSelectionChange?: (selection: StylistSelection) => void;
}
