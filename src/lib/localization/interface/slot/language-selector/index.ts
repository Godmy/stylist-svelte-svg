import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { Language } from '$stylist/control/type/struct/language';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface SlotLanguageSelector extends StructIntersectAll<[SlotChildren]> {
	languages: Language[];
	currentLanguage?: string;
	onLanguageChange?: (code: string) => void;
	showFlags?: boolean;
	showNativeName?: boolean;
	searchable?: boolean;
	dropdownPlacement?: 'top' | 'bottom';
	variant?: TokenAppearance;
	size?: TokenSize;
	class?: string;
	buttonClass?: string;
	dropdownClass?: string;
	languageClass?: string;
}
