import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
export interface ContractFavicon
	extends StructIntersectAll<
		[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>, SlotContent]
	> {
	/** Size in pixels */
	size?: number;
	/** Favicon URL */
	url?: string;
	/** Slot content (fallback) */
	/** Additional CSS class */
	class?: string;
	/** Error state */
	error?: boolean;
	/** On error callback */
	onError?: () => void;
}
