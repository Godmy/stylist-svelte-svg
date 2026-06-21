import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { INotificationProps } from '$stylist/chat/type/struct/notification-props';

export interface NotificationStateProps extends ComputeIntersectAll<[INotificationProps]> {
	class?: string;
}
