import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { AvatarSize } from '$stylist/media/type/struct/avatar-size';
import type { User } from '$stylist/commerce/type/struct/user';

export interface UserCardProps
	extends ComputeIntersectAll<[LayoutHTMLAttributes<HTMLDivElement>]> {
	user?: User;
	size?: AvatarSize;
	showEmail?: boolean;
	showRole?: boolean;
}
