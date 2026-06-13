import type { ChatRoomProps } from '$stylist/chat/type/alias/chat-room-props';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createChatRoomState(props: ChatRoomProps) {
	let messageText = $state('');

	const variantClass = $derived(
		(
			{
				default: 'gap-4',
				compact: 'gap-2',
				spacious: 'gap-6'
			} as Record<string, string>
		)[props.variant ?? 'default']
	);

	const containerClasses = $derived(
		mergeClassNames(
			'chat-room flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-custom40',
			props.class ?? ''
		)
	);

	const headerClasses = $derived(
		mergeClassNames(
			'flex items-center justify-between border-b border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-4 py-4',
			props.headerClass ?? ''
		)
	);

	const messagesAreaClasses = $derived(
		mergeClassNames(
			'flex-1 overflow-y-auto bg-[var(--color-background-secondary)] px-4 py-4',
			variantClass,
			props.messagesClass ?? ''
		)
	);

	const footerClasses = $derived(
		mergeClassNames(
			'border-t border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4',
			props.footerClass ?? ''
		)
	);

	const participantAvatarClasses = (index: number) =>
		mergeClassNames(
			'h-8 w-8 overflow-hidden rounded-full ring-2 ring-[var(--color-background-primary)]',
			index > 0 ? '-ml-2' : 'ml-0'
		);

	const participantOverflowClasses =
		'flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-background-secondary)] text-xs font-semibold text-[var(--color-text-secondary)] ring-2 ring-[var(--color-background-primary)]';

	const loadingClasses = 'flex h-full items-center justify-center';

	const spinnerClasses =
		'h-8 w-8 animate-spin rounded-full border-b-2 border-[var(--color-primary-500)]';

	function handleSend(text: string) {
		props.onMessageSend?.(text);
		messageText = '';
	}

	return {
		get messageText() {
			return messageText;
		},
		get variantClass() {
			return variantClass;
		},
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get messagesAreaClasses() {
			return messagesAreaClasses;
		},
		get footerClasses() {
			return footerClasses;
		},
		get participantOverflowClasses() {
			return participantOverflowClasses;
		},
		get loadingClasses() {
			return loadingClasses;
		},
		get spinnerClasses() {
			return spinnerClasses;
		},
		participantAvatarClasses,
		handleSend
	};
}

export default createChatRoomState;
