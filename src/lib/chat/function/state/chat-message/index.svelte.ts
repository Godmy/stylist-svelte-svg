import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

type MessageStatus = 'sent' | 'delivered' | 'read';

export const createChatMessageState = (props: {
	text?: string;
	sender?: string;
	senderAvatar?: string;
	timestamp?: string;
	status?: MessageStatus;
	isOwn?: boolean;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	footerClass?: string;
	variant?: TokenAppearance;
}) => {
	const alignmentClass = $derived(props.isOwn ? 'justify-end' : 'justify-start');

	const bgClass = $derived(
		props.isOwn
			? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
			: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
	);

	const variantClass = $derived(
		(
			{
				default: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]',
				primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
				secondary: 'bg-[var(--color-background-tertiary)] text-[var(--color-text-primary)]'
			} as Partial<Record<string, string>>
		)[props.variant ?? 'default'] ?? ''
	);

	const bubbleShapeClass = $derived(props.isOwn ? 'rounded-br-none' : 'rounded-bl-none');

	const statusIcon = $derived(
		{
			sent: 'check',
			delivered: 'check',
			read: 'check-check'
		}[props.status ?? 'sent']
	);

	const statusIconClasses = $derived(
		`ml-1 h-3 w-3 ${props.status === 'read' ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-tertiary)]'}`
	);

	const containerClasses = $derived(
		mergeClassNames(`flex ${props.isOwn ? 'justify-end' : 'justify-start'}`, props.class ?? '')
	);

	const contentClasses = $derived(
		mergeClassNames('max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl', props.contentClass ?? '')
	);

	const headerClasses = $derived(
		mergeClassNames(
			'mb-1 flex items-center text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]',
			props.headerClass ?? ''
		)
	);

	const footerClasses = $derived(
		mergeClassNames(
			'mt-1 flex items-center justify-end text-[11px] text-[var(--color-text-secondary)]',
			props.footerClass ?? ''
		)
	);

	const bubbleClasses = $derived(
		mergeClassNames(
			'rounded-[1.25rem] px-4 py-3 shadow-custom28',
			props.isOwn
				? 'rounded-br-md bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
				: `rounded-bl-md ${stateVariantClass()}`,
			!props.isOwn &&
				!stateVariantClass() &&
				'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
		)
	);

	const textClasses = $derived('text-sm leading-6');

	function stateVariantClass() {
		return props.isOwn ? '' : variantClass;
	}

	return {
		get alignmentClass() {
			return alignmentClass;
		},
		get bgClass() {
			return bgClass;
		},
		get variantClass() {
			return variantClass;
		},
		get bubbleShapeClass() {
			return bubbleShapeClass;
		},
		get statusIcon() {
			return statusIcon;
		},
		get statusIconClasses() {
			return statusIconClasses;
		},
		get containerClasses() {
			return containerClasses;
		},
		get contentClasses() {
			return contentClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get footerClasses() {
			return footerClasses;
		},
		get bubbleClasses() {
			return bubbleClasses;
		},
		get textClasses() {
			return textClasses;
		}
	};
};

export default createChatMessageState;
