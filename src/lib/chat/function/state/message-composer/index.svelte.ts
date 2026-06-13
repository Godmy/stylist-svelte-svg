import type { SlotMessageComposer as IMessageComposerProps } from '$stylist/chat/interface/slot/message-composer';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export const createMessageComposerState = (props: IMessageComposerProps) => {
	let messageText = $state(props.value ?? '');

	$effect(() => {
		messageText = props.value ?? '';
	});

	const containerClasses = $derived(
		mergeClassNames(
			'message-composer rounded-[1.15rem] border border-[--color-border-primary] bg-[--color-background-primary] p-2 shadow-custom28',
			String(props.class ?? '')
		)
	);

	const formClasses = $derived('flex flex-1 items-end gap-2');

	const attachmentButtonClasses = $derived('shrink-0');

	const inputContainerClasses = $derived('relative flex-1');

	const inputClasses = $derived(
		mergeClassNames(
			'w-full resize-none rounded-[1rem] border border-transparent bg-[--color-background-secondary] px-4 py-3 pr-10 text-[--color-text-primary] focus:border-[--color-primary-500] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] max-h-32',
			props.inputClass ?? ''
		)
	);

	const sendButtonClasses = $derived(
		mergeClassNames('shrink-0 rounded-full', props.buttonClass ?? '')
	);

	const voiceButtonClasses = $derived(
		mergeClassNames('shrink-0 rounded-full', props.buttonClass ?? '')
	);

	const showSendButton = $derived(messageText.trim().length > 0);

	const showVoiceButton = $derived(!showSendButton && (props.showVoiceButton ?? true));

	const showAttachmentButton = $derived(props.showAttachmentButton ?? true);

	const disabled = $derived(props.disabled ?? false);

	function handleInput(e: Event) {
		const target = e.target as HTMLTextAreaElement;
		messageText = target.value;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (messageText.trim() && !disabled) {
			props.onSendMessage?.(messageText);
			messageText = '';
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e);
		}
	}

	function handleAttachmentClick() {
		props.onAttachmentClick?.();
	}

	function handleVoiceClick() {
		props.onVoiceClick?.();
	}

	return {
		get messageText() {
			return messageText;
		},
		set messageText(value: string) {
			messageText = value;
		},
		get containerClasses() {
			return containerClasses;
		},
		get formClasses() {
			return formClasses;
		},
		get attachmentButtonClasses() {
			return attachmentButtonClasses;
		},
		get inputContainerClasses() {
			return inputContainerClasses;
		},
		get inputClasses() {
			return inputClasses;
		},
		get sendButtonClasses() {
			return sendButtonClasses;
		},
		get voiceButtonClasses() {
			return voiceButtonClasses;
		},
		get showSendButton() {
			return showSendButton;
		},
		get showVoiceButton() {
			return showVoiceButton;
		},
		get showAttachmentButton() {
			return showAttachmentButton;
		},
		get disabled() {
			return disabled;
		},
		handleInput,
		handleSubmit,
		handleKeyDown,
		handleAttachmentClick,
		handleVoiceClick
	};
};

export default createMessageComposerState;
