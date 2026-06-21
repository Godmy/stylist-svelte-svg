import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { CodeSectionVariant } from '$stylist/development/type/struct/code-section-variant';

export type CodeSectionProps = {
	title?: string;
	language?: string;
	code: string;
	variant?: CodeSectionVariant;
	showLineNumbers?: boolean;
	startLineNumber?: number;
	showCopyButton?: boolean;
	copySuccessMessage?: string;
	copyErrorMessage?: string;
	tags?: string[];
} & HTMLAttributes<HTMLElement> & BehaviorBorderToken & BehaviorTypography;
