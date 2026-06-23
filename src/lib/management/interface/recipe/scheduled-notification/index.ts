import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { NotificationItem } from '$stylist/management/type/struct/notification-item';

export interface RecipeScheduledNotification extends ComputeIntersectAll<[NotificationItem]> {}
