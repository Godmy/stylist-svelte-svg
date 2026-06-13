import type { UserProfileCardElementProps as LegacyUserProfileCardProps1 } from '$stylist/management/type/struct/settings-user-profile-card-element-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotUserProfileCard as UserProfileCardProps } from '$stylist/form/interface/slot/user-profile-card';

export interface RecipeUserProfileCard
	extends StructIntersectAll<[LegacyUserProfileCardProps1, UserProfileCardProps]> {}
