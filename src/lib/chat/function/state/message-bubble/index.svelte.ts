import type { SlotMessageBubble as IMessageBubbleProps } from '$stylist/chat/interface/slot/message-bubble';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { MESSAGE_BUBBLE_WRAPPER_VARIANTS } from '$stylist/chat/const/map/message-bubble-wrapper-variants';

export const createMessageBubbleState = (props: IMessageBubbleProps) => {
	const containerClasses = $derived(
		mergeClassNames(
			'message-bubble-container flex',
			(props.align ?? 'left') === 'right' ? 'justify-end ml-auto' : 'justify-start mr-auto',
			String(props.class ?? '')
		)
	);

	const wrapperClasses = $derived(
		mergeClassNames(
			'message-bubble-wrapper relative max-w-xs p-4',
			(props.variant ?? 'primary') === 'secondary'
				? MESSAGE_BUBBLE_WRAPPER_VARIANTS.secondary
				: (props.align ?? 'left') === 'right'
					? MESSAGE_BUBBLE_WRAPPER_VARIANTS.right
					: MESSAGE_BUBBLE_WRAPPER_VARIANTS.left
		)
	);

	const authorClasses = $derived(
		(props.variant ?? 'primary') === 'secondary'
			? 'text-sm font-semibold text-center text-[var(--color-text-secondary)]'
			: (props.align ?? 'left') === 'right'
				? 'text-sm font-semibold text-[var(--color-primary-100)]'
				: 'text-sm font-semibold text-[var(--color-text-secondary)]'
	);

	const messageClasses = $derived(
		(props.variant ?? 'primary') === 'secondary'
			? 'mt-1 text-center text-[var(--color-text-secondary)]'
			: (props.align ?? 'left') === 'right'
				? 'mt-1 text-[var(--color-text-inverse)]'
				: 'mt-1 text-[var(--color-text-primary)]'
	);

	const timestampClasses = $derived(
		(props.variant ?? 'primary') === 'secondary'
			? 'text-xs mt-2 text-center text-[var(--color-text-tertiary)]'
			: (props.align ?? 'left') === 'right'
				? 'text-xs mt-2 text-[var(--color-primary-100)]'
				: 'text-xs mt-2 text-[var(--color-text-tertiary)]'
	);

	const avatarContainerClasses = $derived(
		`flex ${(props.align ?? 'left') === 'left' ? 'mr-3' : 'ml-3'}`
	);

	const showLeftAvatar = $derived(props.avatar != null && props.align === 'left');

	const showRightAvatar = $derived(props.avatar != null && props.align === 'right');

	return {
		get containerClasses() {
			return containerClasses;
		},
		get wrapperClasses() {
			return wrapperClasses;
		},
		get authorClasses() {
			return authorClasses;
		},
		get messageClasses() {
			return messageClasses;
		},
		get timestampClasses() {
			return timestampClasses;
		},
		get avatarContainerClasses() {
			return avatarContainerClasses;
		},
		get showLeftAvatar() {
			return showLeftAvatar;
		},
		get showRightAvatar() {
			return showRightAvatar;
		}
	};
};

export default createMessageBubbleState;
