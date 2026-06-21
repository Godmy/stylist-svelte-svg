import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { DocumentationBlockVariant } from '$stylist/development/type/struct/documentation-block-variant';

export interface SlotDocumentationBlock extends HTMLAttributes<HTMLElement>, BehaviorBorderToken, BehaviorTypography {
	title?: string;
	content: string;
	variant?: DocumentationBlockVariant;
	codeExamples?: {
		title?: string;
		code: string;
		language?: string;
		showLineNumbers?: boolean;
	}[];
	tags?: string[];
}
