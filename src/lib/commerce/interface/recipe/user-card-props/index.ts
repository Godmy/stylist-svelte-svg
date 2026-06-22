import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { TokenUserCardSize } from '$stylist/commerce/type/enum/user-card-size';
import type { User } from '$stylist/commerce/type/struct/user';

export interface UserCardProps
	extends ComputeIntersectAll<[LayoutHTMLAttributes<HTMLDivElement>]> {
	user?: User;
	size?: TokenUserCardSize;
	showEmail?: boolean;
	showRole?: boolean;
}
