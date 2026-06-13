import type { RecipeConnectionLine } from '$stylist/canvas/interface/recipe/connection-line';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createConnectionLineState(props: RecipeConnectionLine) {
	const id = $derived(props.id ?? `connection-${Date.now()}`);
	const startX = $derived(props.startX ?? 0);
	const startY = $derived(props.startY ?? 0);
	const endX = $derived(props.endX ?? 100);
	const endY = $derived(props.endY ?? 100);
	const label = $derived(props.label ?? '');
	const color = $derived(props.color ?? 'var(--color-border-primary)');
	const activeColor = $derived(props.activeColor ?? 'var(--color-primary-500)');
	const width = $derived(props.width ?? 2);
	const style = $derived((props.style ?? 'solid') as 'solid' | 'dashed' | 'dotted');
	const animated = $derived(props.animated ?? false);
	const showArrow = $derived(props.showArrow ?? true);
	const arrowSize = $derived(props.arrowSize ?? 10);

	const classes = $derived(
		mergeClassNames(
			'connection-line',
			style !== 'solid' && `connection-line--${style}`,
			animated && 'connection-line--animated',
			props.class
		)
	);
	const pathClasses = $derived('connection-line__path');
	const hitAreaClasses = $derived('connection-line__hit-area');

	const dashArray = $derived(style === 'dashed' ? '5,5' : style === 'dotted' ? '2,2' : 'none');

	const arrowMarkerId = $derived(`arrow-${id}`);
	const arrowMarkerHtml = $derived(
		`<marker id="${arrowMarkerId}" markerWidth="${arrowSize}" markerHeight="${arrowSize * 0.7}" refX="${arrowSize * 0.9}" refY="${arrowSize * 0.35}" orient="auto"><polygon points="0 0, ${arrowSize} ${arrowSize * 0.35}, 0 ${arrowSize * 0.7}" fill="${activeColor}" /></marker>`
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			startX: _startX,
			startY: _startY,
			endX: _endX,
			endY: _endY,
			label: _label,
			color: _color,
			activeColor: _activeColor,
			width: _width,
			style: _style,
			animated: _animated,
			showArrow: _showArrow,
			arrowSize: _arrowSize,
			...rest
		} = props;
		return rest;
	});

	return {
		get id() {
			return id;
		},
		get startX() {
			return startX;
		},
		get startY() {
			return startY;
		},
		get endX() {
			return endX;
		},
		get endY() {
			return endY;
		},
		get label() {
			return label;
		},
		get color() {
			return color;
		},
		get activeColor() {
			return activeColor;
		},
		get width() {
			return width;
		},
		get style() {
			return style;
		},
		get animated() {
			return animated;
		},
		get showArrow() {
			return showArrow;
		},
		get arrowSize() {
			return arrowSize;
		},
		get classes() {
			return classes;
		},
		get pathClasses() {
			return pathClasses;
		},
		get hitAreaClasses() {
			return hitAreaClasses;
		},
		get dashArray() {
			return dashArray;
		},
		get arrowMarkerId() {
			return arrowMarkerId;
		},
		get arrowMarkerHtml() {
			return arrowMarkerHtml;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createConnectionLineState;
