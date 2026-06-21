import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ScheduledNotificationProps } from '$stylist/chat/type/struct/scheduled-notification-props';

export interface RecipeScheduledNotification
	extends ComputeIntersectAll<[ScheduledNotificationProps]> {}
