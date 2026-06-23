import type { AccountSettings as LegacyAccountSettingsFormProps1 } from '$stylist/management/interface/recipe/account-settings';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotAccountSettingsForm as AccountSettingsFormProps } from '$stylist/user/interface/slot/account-settings-form';

export interface RecipeAccountSettingsForm
	extends ComputeIntersectAll<[LegacyAccountSettingsFormProps1, AccountSettingsFormProps]> {}
