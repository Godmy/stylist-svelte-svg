import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ScheduledNotificationProps } from '$stylist/chat/type/struct/scheduled-notification-props';

export interface RecipeScheduledNotification
	extends StructIntersectAll<[ScheduledNotificationProps]> {}
