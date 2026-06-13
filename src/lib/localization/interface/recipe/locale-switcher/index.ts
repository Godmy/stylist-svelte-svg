import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLocaleSwitcher } from '$stylist/localization/interface/slot/locale-switcher';

export interface LocaleSwitcherStateProps extends StructIntersectAll<[SlotLocaleSwitcher]> {
	class?: string;
}
