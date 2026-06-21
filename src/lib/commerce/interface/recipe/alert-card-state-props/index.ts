import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Props } from '$stylist/information/type/struct/props';

export interface AlertCardStateProps extends ComputeIntersectAll<[Omit<Props, 'variant' | 'size'>]> {
	variant?: string;
	size?: string;
	title?: string;
	subtitle?: string;
}
