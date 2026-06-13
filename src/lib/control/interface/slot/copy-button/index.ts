import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { Props } from '$stylist/information/type/struct/props';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';

export interface SlotCopyButton
	extends StructIntersectAll<
		[
			Omit<
				Props,
				'children' | 'text' | 'label' | 'successMessage' | 'showIcon' | 'onSuccess' | 'onError'
			>,
			SlotButtonDom,
			SlotChildren
		]
	> {
	class?: string;
	text?: string;
	label?: string;
	successMessage?: string;
	showIcon?: boolean;
	onSuccess?: (text: string) => void;
	onError?: (error: Error) => void;
}
