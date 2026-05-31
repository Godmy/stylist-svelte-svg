import { SkeletonCircleStyleManager } from '$stylist/notification/class/style-manager/skeleton-circle';
import type { SkeletonCircleProps } from '$stylist/notification/type/struct/skeleton-circle-props';

export function createSkeletonCircleState(props: SkeletonCircleProps) {
	const content = $derived(props.content);
	const restProps = $derived.by(() => {
		const { class: _class, size: _size, content: _content, ...rest } = props;
		return rest;
	});
	const rootClass = $derived(SkeletonCircleStyleManager.root(props.class));
	const style = $derived(SkeletonCircleStyleManager.style(props.size ?? 40));

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

export default createSkeletonCircleState;
