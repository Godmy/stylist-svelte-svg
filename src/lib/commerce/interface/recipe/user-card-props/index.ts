import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { TokenUserCardSize } from '$stylist/commerce/type/enum/user-card-size';
import type { User } from '$stylist/commerce/type/struct/user';

export interface UserCardProps
	extends ComputeIntersectAll<[ArchitectureHTMLAttributes<HTMLDivElement>]> {
	user?: User;
	size?: TokenUserCardSize;
	showEmail?: boolean;
	showRole?: boolean;
}
