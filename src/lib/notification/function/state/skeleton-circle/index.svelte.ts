import type { RecipeSkeletonCircle } from '$stylist/notification/interface/recipe/skeleton-circle';

export function createSkeletonCircleState(props: RecipeSkeletonCircle) {
	const content = $derived(props.content);
	const restProps = $derived.by(() => {
		const { class: _class, size: _size, content: _content, ...rest } = props;
		return rest;
	});
	const size = $derived(props.size ?? 40);
	const rootClass = $derived(`skeleton-container variant-circular ${props.class ?? ''}`.trim());
	const style = $derived(`width: ${size}px; height: ${size}px;`);

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
