import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotLocaleSwitcherLocale } from '$stylist/localization/interface/slot/locale-switcher-locale';
import type { SlotLocaleSwitcherTimezoneOption } from '$stylist/localization/interface/slot/locale-switcher-timezone-option';

export interface SlotLocaleSwitcher extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	locales: SlotLocaleSwitcherLocale[];
	currentLocale: string;
	onLocaleChange?: (localeCode: string) => void;
	timezoneOptions?: SlotLocaleSwitcherTimezoneOption[];
	currentTimezone?: string;
	onTimezoneChange?: (timezone: string) => void;
	showRegional?: boolean;
	showDatePreview?: boolean;
	showTimePreview?: boolean;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	localeClass?: string;
	footerClass?: string;
}
