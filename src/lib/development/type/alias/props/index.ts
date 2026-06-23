import type { TOKEN_CODE_VIEW } from '$stylist/development/const/enum/code-view';
import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export type Props = {
	language?: string;
	variant?: (typeof TOKEN_CODE_VIEW)[number];
	showLineNumbers?: boolean;
	startLineNumber?: number;
	copySuccessMessage?: string;
	copyErrorMessage?: string;
	children: import('svelte').Snippet;
} & HTMLAttributes<HTMLElement> & BehaviorBorderToken & BehaviorTypography;
