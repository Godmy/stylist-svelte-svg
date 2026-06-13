import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenCodeLanguage } from '$stylist/development/type/enum/code-language';
import type { TokenCodeView } from '$stylist/development/type/enum/code-view';

export interface SlotCodeBlock extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	code?: string;
	language?: TokenCodeLanguage | 'text';
	variant?: TokenCodeView;
	size?: TokenSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
	highlightLines?: number[];
	title?: string;
	copyable?: boolean;
	class?: string;
	contentClass?: string;
	lineNumberClass?: string;
	codeClass?: string;
	headerClass?: string;
}
