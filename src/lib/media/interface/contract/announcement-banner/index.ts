import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
export interface ContractAnnouncementBanner
	extends StructIntersectAll<
		[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>, SlotChildren]
	> {
	/** Banner title */
	title?: string;
	/** Banner description */
	description?: string;
	/** Icon name */
	icon?: string;
	/** Slot content */
	/** Additional CSS class */
	class?: string;
}
