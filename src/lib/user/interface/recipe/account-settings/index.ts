import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { AccountSettings } from '$stylist/user/type/object/account-settings';

export interface RecipeAccountSettings
	extends ComputeIntersectAll<[HTMLAttributes<HTMLFormElement>, SlotInteraction]> {
	showEmailChange?: boolean;
	showPasswordChange?: boolean;
	showDeleteAccount?: boolean;
	showTwoFactor?: boolean;
	loading?: boolean;
	class?: string;
	onSubmit?: (settings: AccountSettings) => void;
	onDeleteAccount?: () => void;
}
