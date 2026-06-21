import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface RecipeToggleBaseProps extends ComputeIntersectAll<[]> {
	disabled?: boolean;
	class?: string;
	size?: TokenSize;
}
