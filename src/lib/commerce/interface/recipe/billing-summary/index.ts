import type { SlotBillingSummary } from '$stylist/commerce/interface/slot/billing-summary';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeBillingSummary
	extends ComputeIntersectAll<
		[SlotBillingSummary, SlotTheme, SlotLabel, SlotCaption, HTMLAttributes<HTMLDivElement>]
	> {}
