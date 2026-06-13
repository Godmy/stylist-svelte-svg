import { derived, writable } from 'svelte/store';
import type { SlotChatStatusIndicator as ChatStatusIndicatorProps } from '$stylist/chat/interface/slot/chat-status-indicator';
import type { SlotChatStatusIndicator as ChatStatusIndicatorContract } from '$stylist/chat/interface/slot/chat-status-indicator';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createChatStatusIndicatorState(
	props: ChatStatusIndicatorProps | ChatStatusIndicatorContract
) {
	// Initialize props with defaults
	const status = props.status ?? 'offline';
	const size = props.size ?? 'sm';
	const showLabel = props.showLabel ?? false;

	// Derive the status text
	const statusText = derived([writable(status)], ([$status]) => {
		switch ($status) {
			case 'online':
				return 'Online';
			case 'away':
				return 'Away';
			case 'typing':
				return 'Typing...';
			case 'offline':
				return 'Offline';
			default:
				return '';
		}
	});

	const styles = {
		container: 'inline-flex items-center gap-2',
		indicator: joinClassNames(
			'inline-flex rounded-full ring-2 ring-[var(--color-background-primary)] shadow-sm',
			size === 'lg' ? 'h-3 w-3' : size === 'md' ? 'h-2.5 w-2.5' : 'h-2 w-2',
			status === 'online'
				? 'bg-emerald-500'
				: status === 'away'
					? 'bg-amber-500'
					: status === 'typing'
						? 'bg-sky-500'
						: 'bg-slate-400'
		),
		label: 'text-xs font-medium text-[var(--color-text-secondary)]'
	};

	// Merge classes with custom classes
	const containerClasses = derived(
		[writable(String(props.class ?? '')), writable(styles.container)],
		([$class, $container]) => joinClassNames($container, $class)
	);

	return {
		status,
		size,
		showLabel,
		statusText: statusText,
		containerClasses,
		indicatorClasses: styles.indicator,
		labelClasses: styles.label
	};
}

export default createChatStatusIndicatorState;
