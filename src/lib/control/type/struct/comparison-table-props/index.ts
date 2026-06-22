import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComparisonTableFeature } from '../comparison-table-feature';
import type { ComparisonTableProduct } from '../comparison-table-product';

export type ComparisonTableProps = {
	features: ComparisonTableFeature[];
	products: ComparisonTableProduct[];
	showHeader?: boolean;
	showDescription?: boolean;
	class?: string;
	headerClass?: string;
	featureClass?: string;
	productClass?: string;
	valueClass?: string;
	primaryProductClass?: string;
} & HTMLAttributes<HTMLDivElement> & SlotInteraction;
