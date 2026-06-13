import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotButtonAttributesBase } from '$stylist/control/interface/slot/button-attributes-base';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeFollowButton
	extends StructIntersectAll<
		[
			SlotButtonAttributesBase,
			SlotLabel,
			SlotBadge,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {
	isFollowing?: boolean;
	showText?: boolean;
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	followingText?: string;
	unfollowText?: string;
	onFollow?: () => void | Promise<void>;
	onUnfollow?: () => void | Promise<void>;
}
