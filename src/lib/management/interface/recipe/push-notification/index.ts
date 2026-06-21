import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface PushNotificationProps extends ComputeIntersectAll<[]> {
	title?: string;
	message?: string;
	type?: 'info' | 'success' | 'warning' | 'error';
	showIcon?: boolean;
	autoDismiss?: boolean;
	duration?: number;
	onClose?: () => void;
	class?: string;
}
