import type { RecipeSkeletonText } from '$stylist/notification/interface/recipe/skeleton-text';

export function createSkeletonTextState(props: RecipeSkeletonText) {
	const content = $derived(props.content);
	const restProps = $derived.by(() => {
		const { class: _class, width: _width, content: _content, ...rest } = props;
		return rest;
	});
	const width = $derived(props.width ?? '100%');
	const rootClass = $derived(`skeleton-container variant-text ${props.class ?? ''}`.trim());
	const style = $derived(`width: ${width};`);

	return {
		get content() {
			return content;
		},
		get restProps() {
			return restProps;
		},
		get rootClass() {
			return rootClass;
		},
		get style() {
			return style;
		}
	};
}
