import type { SlotChat as Chat } from '$stylist/chat/interface/slot/chat';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export const createChatItemState = (props: {
	chat: Chat;
	currentUser: User;
	isActive?: boolean;
	class?: string;
}) => {
	const isActiveVal = $derived(props.isActive ?? false);
	const isGroupChat = $derived(props.chat.participants.length > 2);

	const otherUser = $derived(
		!isGroupChat
			? props.chat.participants.find((user: User) => user.id !== props.currentUser.id)
			: null
	);

	const lastMessagePreview = $derived.by(() => {
		if (!props.chat.lastMessage) return 'No messages yet';

		const content =
			typeof props.chat.lastMessage === 'object'
				? props.chat.lastMessage.content
				: props.chat.lastMessage || '';
		return content.length > 30 ? `${content.substring(0, 30)}...` : content;
	});

	const containerClasses = $derived(
		mergeClassNames(
			'chat-item group relative flex items-center gap-3 border-b border-[var(--color-border-primary)] px-4 py-4 transition-all duration-200',
			isActiveVal
				? 'bg-[var(--color-primary-50)] shadow-[inset_3px_0_0_var(--color-primary-500)]'
				: 'bg-transparent hover:bg-[var(--color-background-secondary)] hover:translate-x-[2px]',
			props.class ?? ''
		)
	);

	const chatInfoClasses = 'chat-info flex-1 min-w-0';

	const chatNameClasses =
		'chat-name mb-1 truncate text-sm font-semibold tracking-[0.01em] text-[var(--color-text-primary)]';

	const lastMessageClasses =
		'last-message truncate text-[13px] leading-5 text-[var(--color-text-secondary)]';

	const chatMetaClasses = 'chat-meta flex flex-col items-end gap-1 self-start';

	const chatActionsClasses =
		'chat-actions absolute right-3 top-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100';

	function handleClick() {
		// dispatch('select')
	}

	function handleKeydown(keyEvent: KeyboardEvent) {
		if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
			handleClick();
		}
	}

	function handleDelete() {
		// dispatch('delete')
	}

	return {
		get isGroupChat() {
			return isGroupChat;
		},
		get otherUser() {
			return otherUser;
		},
		get lastMessagePreview() {
			return lastMessagePreview;
		},
		get containerClasses() {
			return containerClasses;
		},
		get chatInfoClasses() {
			return chatInfoClasses;
		},
		get chatNameClasses() {
			return chatNameClasses;
		},
		get lastMessageClasses() {
			return lastMessageClasses;
		},
		get chatMetaClasses() {
			return chatMetaClasses;
		},
		get chatActionsClasses() {
			return chatActionsClasses;
		},
		handleClick,
		handleKeydown,
		handleDelete
	};
};

export default createChatItemState;
