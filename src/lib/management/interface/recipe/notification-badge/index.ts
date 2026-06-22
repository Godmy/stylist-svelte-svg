import type { HTMLAttributes } from 'svelte/elements';
import type { SlotNotificationBadge as INotificationBadgeProps } from '$stylist/notification/interface/slot/notification-badge';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeNotificationBadge
	extends ComputeIntersectAll<
		[INotificationBadgeProps, Omit<HTMLAttributes<HTMLDivElement>, 'children'>]
	> {}
