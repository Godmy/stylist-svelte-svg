import type { AccountSettingsFormElementProps as LegacyAccountSettingsFormProps1 } from '$stylist/management/interface/recipe/account-settings-form-element-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotAccountSettingsForm as AccountSettingsFormProps } from '$stylist/form/interface/slot/account-settings-form';

export interface RecipeAccountSettingsForm
	extends ComputeIntersectAll<[LegacyAccountSettingsFormProps1, AccountSettingsFormProps]> {}
