import type { SlotBillingSummary } from '$stylist/commerce/interface/slot/billing-summary';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeBillingSummary
	extends StructIntersectAll<
		[SlotBillingSummary, SlotTheme, SlotLabel, SlotCaption, HTMLAttributes<HTMLDivElement>]
	> {}
