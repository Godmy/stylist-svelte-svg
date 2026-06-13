import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionIntent } from '../interaction-intent';
import type { InteractionFeedback } from '../interaction-feedback';

export type InteractionHTMLAttributes<T extends HTMLElement = HTMLDivElement> =
	HTMLAttributes<T> & {
		interactionIntent?: InteractionIntent;
		interactionFeedback?: InteractionFeedback;
		interactionDelay?: number;
		interactionDuration?: string;
		interactionState?: 'idle' | 'pressed' | 'hover' | 'disabled' | 'active';
		interactionSticky?: boolean;
		interactionThreshold?: number;
	};
