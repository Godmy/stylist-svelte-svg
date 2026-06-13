import type { PlaygroundMarkdownRendererProps as LegacyPlaygroundMarkdownRendererProps1 } from '$stylist/playground/type/struct/playground-markdown-renderer-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundMarkdownRenderer
	extends StructIntersectAll<
		[
			LegacyPlaygroundMarkdownRendererProps1,
			Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>
		]
	> {
	/** Markdown content */
	markdown?: string;
	/** Additional CSS class */
	class?: string;
}
