import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TierContent } from '$stylist/architecture/type/enum/tier';

export interface SlotPagination extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	currentPage: number;
	totalPages: number;
	showFirstLast?: boolean;
	showPrevNext?: boolean;
	showDots?: boolean;
	maxVisible?: number;
	variant?: TierContent;
	size?: TokenSize;
	disabled?: boolean;
	class?: string;
	buttonClass?: string;
	activeButtonClass?: string;
	disabledButtonClass?: string;
	onPageChange?: (page: number) => void;
}
