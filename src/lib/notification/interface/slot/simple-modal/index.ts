import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotSimpleModal extends InteractionHTMLAttributes<HTMLDivElement> {
	open?: boolean;
	title?: string;
	class?: string;
	onClose?: () => void;
}
