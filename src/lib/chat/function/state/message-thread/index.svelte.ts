import type { SlotMessageThread as MessageThreadProps } from '$stylist/chat/interface/slot/message-thread';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export const createMessageThreadState = (props: MessageThreadProps) => {
	const hostClasses = $derived(
		mergeClassNames(
			'flex h-full max-h-[600px] flex-col overflow-hidden rounded-[1.25rem] border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-custom28',
			props.class
		)
	);

	const headerClasses = $derived(
		'border-b border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-4 py-3'
	);

	const containerClasses = $derived(
		'flex-1 overflow-y-auto bg-[var(--color-background-secondary)] px-4 py-4'
	);

	const messageContainerClasses = $derived('flex flex-col gap-3');

	const variantClass = $derived(props.variant ? `variant-${props.variant}` : '');

	const loadingClasses = $derived('flex h-32 items-center justify-center');

	const spinnerClasses = $derived(
		'h-8 w-8 animate-spin rounded-full border-b-2 border-[var(--color-primary-500)]'
	);

	return {
		get hostClasses() {
			return hostClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get containerClasses() {
			return containerClasses;
		},
		get messageContainerClasses() {
			return messageContainerClasses;
		},
		get variantClass() {
			return variantClass;
		},
		get loadingClasses() {
			return loadingClasses;
		},
		get spinnerClasses() {
			return spinnerClasses;
		},
		get title() {
			return props.title;
		},
		get messages() {
			return props.messages ?? [];
		},
		get loading() {
			return props.loading ?? false;
		},
		get messageVariant() {
			return props.messageVariant;
		}
	};
};

export default createMessageThreadState;
