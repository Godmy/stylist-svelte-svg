import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SearchResultItem } from '../search-results-item';

export type SearchResultsProps = {
	results?: SearchResultItem[];
	query?: string;
	loading?: boolean;
	class?: string | null;
	onResultClick?: (result: SearchResultItem) => void;
	showMetadata?: boolean;
	maxResults?: number;
} & Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'results'> & SlotInteraction;
