import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';

export interface RecipeBlockquote
	extends ComputeIntersectAll<
		[
			SlotTheme, 
			ChildrenProp, 
			HTMLAttributes<HTMLQuoteElement>
		]
	> {
		cite?: string;
		citeUrl?: string;
		sourceLabel?: string;
		footerPrefix?: string;
		withBorder?: boolean;
		withBackground?: boolean;
	}
