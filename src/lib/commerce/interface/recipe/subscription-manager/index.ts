import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotSubscription } from '$stylist/commerce/interface/slot/subscription';
import type { BehaviorSubscriptionManagerEvents } from '$stylist/commerce/interface/behavior/subscription-manager-events';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeSubscriptionManager
	extends StructIntersectAll<[SlotTheme, SlotLabel, SlotCaption, HTMLAttributes<HTMLDivElement>]>,
		BehaviorSubscriptionManagerEvents {
	subscription: SlotSubscription;

	showActions?: boolean;

	showBillingInfo?: boolean;

	showPaymentMethod?: boolean;

	headerClass?: string;

	planClass?: string;

	actionsClass?: string;

	footerClass?: string;
}
