type CodeWithCopyVariant = string;
import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export type Props = {
	language?: string;
	variant?: CodeWithCopyVariant;
	showLineNumbers?: boolean;
	startLineNumber?: number;
	copySuccessMessage?: string;
	copyErrorMessage?: string;
	children: import('svelte').Snippet;
} & HTMLAttributes<HTMLElement> & BehaviorBorderToken & BehaviorTypography;
