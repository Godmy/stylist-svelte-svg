import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipePriceAlert
	extends ComputeIntersectAll<
		[SlotTheme, BehaviorSizable, BehaviorClickable, HTMLAttributes<HTMLDivElement>]
	> {
	currentPrice?: number;
	targetPrice?: number;
	currency?: string;
	status?: TokenMonitoringType;
	productName?: string;
	variant?: TokenMonitoringType;
	size?: string;
	disabled?: boolean;
	onStatusChange?: (status: TokenMonitoringType) => void;
}
