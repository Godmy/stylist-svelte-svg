import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenCodeView } from '$stylist/development/type/enum/code-view';

export interface RecipeThemeSyntaxHighlightedCode
	extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement>]> {
	class?: string;
	code?: string;
	language?: string;
	variant?: TokenCodeView;
	size?: TokenSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}
