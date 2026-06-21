import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PrivacySettingsSetting } from '$stylist/development/type/struct/privacy-settings-setting';

export interface SlotPrivacySettings extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	settings?: PrivacySettingsSetting[];
	onSave?: () => void;
	class?: string;
}
