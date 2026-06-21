import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { NotificationPreferencesProps } from '$stylist/chat/type/struct/notification-preferences-props';

export interface RecipeNotificationPreferences
	extends ComputeIntersectAll<[NotificationPreferencesProps]> {
	email?: boolean;
	push?: boolean;
	sms?: boolean;
}
