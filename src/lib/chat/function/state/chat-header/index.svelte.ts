import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { ChatHeaderOrganismProps } from '$stylist/chat/type/alias/chat-header-organism-props';

export const createChatHeaderState = (props: ChatHeaderOrganismProps) => {
	const chat = $derived(props.chat);
	const currentUser = $derived(props.currentUser);
	const showActions = $derived(props.showActions ?? true);
	const className = $derived(props.class ?? '');

	const isGroupChat = $derived(chat.participants.length > 2);

	const otherUser = $derived(
		!isGroupChat ? chat.participants.find((u: User) => u.id !== currentUser.id) : null
	) as User | null;

	const containerClasses = $derived(
		mergeClassNames(
			'c-chat-header flex items-center justify-between border-b border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3',
			className
		)
	);
	const infoClasses = $derived('chat-info flex flex-1 items-center gap-3.5 min-w-0');
	const detailsClasses = $derived('chat-details flex flex-1 flex-col gap-[2px] min-w-0');
	const nameClasses = $derived(
		'chat-name truncate text-sm font-semibold tracking-[0.01em] text-[--color-text-primary]'
	);
	const actionsClasses = $derived('chat-actions flex items-center gap-2');

	function handleCall() {
		props.onCall?.();
	}

	function handleVideoCall() {
		props.onVideoCall?.();
	}

	function handleInfo() {
		props.onInfo?.();
	}

	return {
		get isGroupChat() {
			return isGroupChat;
		},
		get otherUser() {
			return otherUser;
		},
		get containerClasses() {
			return containerClasses;
		},
		get infoClasses() {
			return infoClasses;
		},
		get detailsClasses() {
			return detailsClasses;
		},
		get nameClasses() {
			return nameClasses;
		},
		get actionsClasses() {
			return actionsClasses;
		},
		get showActions() {
			return showActions;
		},
		get chat() {
			return chat;
		},
		get currentUser() {
			return currentUser;
		},
		handleCall,
		handleVideoCall,
		handleInfo
	};
};

export default createChatHeaderState;
