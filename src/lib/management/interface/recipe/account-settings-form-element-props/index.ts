import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { AccountSettings } from '$stylist/management/type/struct/settings/account-settings';

export interface AccountSettingsFormElementProps
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
