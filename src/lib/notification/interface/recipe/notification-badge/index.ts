import type { HTMLAttributes } from 'svelte/elements';
import type { SlotNotificationBadge } from '$stylist/notification/interface/slot/notification-badge';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeNotificationBadge
	extends ComputeIntersectAll<
		[
			SlotNotificationBadge,
			Omit<HTMLAttributes<HTMLDivElement>, 'children'>]
	> {}
