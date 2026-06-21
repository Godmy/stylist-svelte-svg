import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { Snippet } from 'svelte';

export interface SlotComponentPreview
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	title: string;
	description?: string;
	code: string;
	language?: string;
	componentDemo: Snippet;
	showCode?: boolean;
	class?: string;
}
