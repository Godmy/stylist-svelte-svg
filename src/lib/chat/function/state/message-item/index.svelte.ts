import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';

export const createMessageItemState = (props: {
	message: Message;
	isOwn?: boolean;
	showAvatar?: boolean;
	enableReactions?: boolean;
	sender?: User;
}) => {
	const isOwn = $derived(props.isOwn ?? false);
	const showAvatar = $derived(props.showAvatar ?? true);
	const enableReactions = $derived(props.enableReactions ?? true);

	let reactionsVisible = $state(false);
	const availableReactions = $state(['👍', '👎', '❤️', '😂', '😮', '😢']);

	const messageAlignment = $derived(isOwn ? 'items-end' : 'items-start');

	const messageBackground = $derived(
		isOwn
			? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
			: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)]'
	);

	const messageBorder = $derived(
		isOwn ? 'border-[var(--color-primary-600)]' : 'border-[var(--color-border-primary)]'
	);

	const messageMargin = $derived(isOwn ? 'ml-auto' : '');

	const messageContainerClasses = $derived.by(
		() => `message-row flex w-full items-end gap-3 ${isOwn ? 'justify-end' : 'justify-start'}`
	);

	const messageBubbleClasses = $derived(
		`message-bubble rounded-[1.25rem] border px-4 py-3 max-w-[75%] shadow-custom28 ${isOwn ? 'bg-[var(--color-primary-500)]' : 'bg-[var(--color-background-primary)]'} relative ${messageBackground} ${messageBorder} ${messageMargin}`.trim()
	);

	const messageContentClasses = 'message-content word-wrap break-word whitespace-pre-wrap';

	const messageActionsClasses =
		'message-actions mt-2 flex items-center gap-1 opacity-[var(--opacity-70)] transition-opacity hover:opacity-[var(--opacity-100)]';

	const actionButtonClasses =
		'action-button rounded-full border border-[var(--color-border-primary)] bg-[var(--color-background-primary)]/70 p-1.5 transition-colors hover:bg-[var(--color-background-secondary)]';

	const reactionsPickerClasses =
		'reactions-picker absolute bottom-full left-0 flex gap-1 rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-2 shadow-custom38 z-[var(--z-index-docked)]';

	const reactionOptionClasses =
		'reaction-option rounded-full p-1 text-lg transition-colors hover:bg-[var(--color-background-secondary)]';

	function handleReactionClick(reaction: string) {
		// dispatch('reaction', { reaction })
		reactionsVisible = false;
	}

	function handleReactionKeydown(event: KeyboardEvent, reaction: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleReactionClick(reaction);
		}
	}

	function handleReply() {
		// dispatch('reply', { message: props.message })
	}

	function handleForward() {
		// dispatch('forward', { message: props.message })
	}

	return {
		get isOwn() {
			return isOwn;
		},
		get showAvatar() {
			return showAvatar;
		},
		get enableReactions() {
			return enableReactions;
		},
		get reactionsVisible() {
			return reactionsVisible;
		},
		set reactionsVisible(value: boolean) {
			reactionsVisible = value;
		},
		get availableReactions() {
			return availableReactions;
		},
		get messageAlignment() {
			return messageAlignment;
		},
		get messageBackground() {
			return messageBackground;
		},
		get messageBorder() {
			return messageBorder;
		},
		get messageMargin() {
			return messageMargin;
		},
		get messageContainerClasses() {
			return messageContainerClasses;
		},
		get messageBubbleClasses() {
			return messageBubbleClasses;
		},
		get messageContentClasses() {
			return messageContentClasses;
		},
		get messageActionsClasses() {
			return messageActionsClasses;
		},
		get actionButtonClasses() {
			return actionButtonClasses;
		},
		get reactionsPickerClasses() {
			return reactionsPickerClasses;
		},
		get reactionOptionClasses() {
			return reactionOptionClasses;
		},
		handleReactionClick,
		handleReactionKeydown,
		handleReply,
		handleForward
	};
};

export default createMessageItemState;
