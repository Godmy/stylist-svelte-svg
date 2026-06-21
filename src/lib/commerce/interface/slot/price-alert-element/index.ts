import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { Props } from '$stylist/information/type/struct/props';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';

export interface SlotPriceAlertElement
	extends StructIntersectAll<
		[
			Omit<Props, 'variant' | 'size' | 'onclick' | 'class'>,
			Omit<HTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick'>,
			BehaviorBorderToken,
			BehaviorTypography,
			SlotChildren
		]
	> {
	class?: string;
	variant?: TokenMonitoringType;
	size?: TokenSize;
	onclick?: ((event: MouseEvent) => void) | undefined;
	currentPrice?: number;
	targetPrice?: number;
	currency?: string;
	status?: TokenMonitoringType;
	productName?: string;
	onStatusChange?: (status: TokenMonitoringType) => void;
}
