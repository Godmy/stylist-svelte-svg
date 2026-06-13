import type { SlotUser as User } from '$stylist/chat/interface/slot/user';

export const createUserStatusState = (props: {
	user: User;
	showAvatar?: boolean;
	showName?: boolean;
	showStatusText?: boolean;
}) => {
	const showAvatar = $derived(props.showAvatar ?? true);
	const showName = $derived(props.showName ?? true);
	const showStatusText = $derived(props.showStatusText ?? false);

	const statusText = $derived.by(() => {
		const userStatus = props.user.status;
		const lastSeen = (props.user as unknown as Record<string, unknown>).lastSeen as
			| Date
			| undefined;
		switch (userStatus) {
			case 'online':
				return 'в сети';
			case 'away':
			case 'idle':
				return 'не на месте';
			case 'typing':
				return 'печатает...';
			case 'offline':
				return lastSeen
					? `был(а) ${new Date(lastSeen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
					: 'не в сети';
			default:
				return '';
		}
	});

	const containerClasses = 'user-status inline-flex items-center gap-2.5';

	const userInfoClasses = 'user-info flex min-w-0 flex-col gap-[2px]';

	const userNameClasses = 'user-name truncate text-sm font-medium text-[var(--color-text-primary)]';

	const statusTextClasses = 'status-text text-xs leading-4 text-[var(--color-text-secondary)]';

	return {
		get showAvatar() {
			return showAvatar;
		},
		get showName() {
			return showName;
		},
		get showStatusText() {
			return showStatusText;
		},
		get statusText() {
			return statusText;
		},
		get containerClasses() {
			return containerClasses;
		},
		get userInfoClasses() {
			return userInfoClasses;
		},
		get userNameClasses() {
			return userNameClasses;
		},
		get statusTextClasses() {
			return statusTextClasses;
		}
	};
};

export default createUserStatusState;
