import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { NotificationItem } from '$stylist/management/type/struct/notification-item';

export interface NotificationStateProps extends ComputeIntersectAll<[NotificationItem]> {
	class?: string;
}
