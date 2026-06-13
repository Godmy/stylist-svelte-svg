import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface RecipeToggleBaseProps extends StructIntersectAll<[]> {
	disabled?: boolean;
	class?: string;
	size?: TokenSize;
}
