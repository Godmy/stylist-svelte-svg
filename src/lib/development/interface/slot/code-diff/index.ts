import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface SlotCodeDiff extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	original?: string;
	modified?: string;
	language?: string;
	showLineNumbers?: boolean;
	class?: string;
	contentClass?: string;
	headerClass?: string;
}
