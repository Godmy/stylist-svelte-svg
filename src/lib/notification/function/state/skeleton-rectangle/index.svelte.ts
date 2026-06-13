import type { RecipeSkeletonRectangle } from '$stylist/notification/interface/recipe/skeleton-rectangle';

export function createSkeletonRectangleState(props: RecipeSkeletonRectangle) {
	const content = $derived(props.content);
	const restProps = $derived.by(() => {
		const { class: _class, width: _width, height: _height, content: _content, ...rest } = props;
		return rest;
	});
	const w = $derived(props.width ?? 120);
	const h = $derived(props.height ?? 80);
	const rootClass = $derived(`skeleton-container variant-rectangular ${props.class ?? ''}`.trim());
	const style = $derived(`width: ${w}px; height: ${h}px;`);

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
