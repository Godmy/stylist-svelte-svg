import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { NotificationItem } from '$stylist/management/type/struct/notification-item';

export interface RecipeNotificationPreferences extends ComputeIntersectAll<[NotificationItem]> {
	email?: boolean;
	push?: boolean;
	sms?: boolean;
}
