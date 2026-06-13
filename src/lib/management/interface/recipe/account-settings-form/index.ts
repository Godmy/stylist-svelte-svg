import type { AccountSettingsFormElementProps as LegacyAccountSettingsFormProps1 } from '$stylist/management/interface/recipe/account-settings-form-element-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotAccountSettingsForm as AccountSettingsFormProps } from '$stylist/form/interface/slot/account-settings-form';

export interface RecipeAccountSettingsForm
	extends StructIntersectAll<[LegacyAccountSettingsFormProps1, AccountSettingsFormProps]> {}
