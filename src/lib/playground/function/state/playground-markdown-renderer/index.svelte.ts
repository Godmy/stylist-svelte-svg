import type { RecipePlaygroundMarkdownRenderer } from '$stylist/playground/interface/recipe/playground-markdown-renderer';
export function createPlaygroundMarkdownRendererState(props: RecipePlaygroundMarkdownRenderer) {
	const content = $derived(props.content);
	const hostClass = $derived(props.class ?? '');

	let html = $state('');

	return {
		get content() {
			return content;
		},
		get hostClass() {
			return hostClass;
		},
		get html() {
			return html;
		},
		set html(value: string) {
			html = value;
		}
	};
}
