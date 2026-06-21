import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { StackedLayoutDirection } from '$stylist/layout/type/enum/stacked-layout-direction';
import type { StackedLayoutGap } from '$stylist/layout/type/enum/stacked-layout-gap';
export interface StackedLayoutProps extends ComputeIntersectAll<[]> {
	direction?: StackedLayoutDirection;
	gap?: StackedLayoutGap;
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	class?: string;
	children?: any;
}
