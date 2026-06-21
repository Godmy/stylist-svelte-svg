import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface ContractCodeBlock
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	/** Code content */
	code?: string;
	/** Programming language */
	language?: string;
	/** Show line numbers */
	showLineNumbers?: boolean;
	/** Lines to highlight */
	highlightLines?: number[];
	/** Block title */
	title?: string;
	/** Copyable code */
	copyable?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Content CSS class */
	contentClass?: string;
	/** Line number CSS class */
	lineNumberClass?: string;
	/** Code CSS class */
	codeClass?: string;
	/** Header CSS class */
	headerClass?: string;
}
