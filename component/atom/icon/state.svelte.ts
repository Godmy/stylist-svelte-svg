import { joinClasses } from '$stylist/svg/function/script/class-list';
import { normalizeIconName } from '$stylist/svg/function/script/icon-name';
import { isIconName } from '$stylist/svg/function/check/icon-name';
import { resolveIconSvg } from '$stylist/svg/function/async/resolve-icon-svg';
import type { RecipeIcon } from '$stylist/svg/interface/recipe/icon';
import { TOKEN_ICON_SIZE } from '$stylist/svg/const/record/icon-size';

export function createIconState(getProps: () => RecipeIcon) {
	const props = $derived(getProps());
	const name = $derived(props.name ?? 'box');
	const svg = $derived(props.svg);
	const size = $derived(props.size ?? 'md');
	const strokeWidth = $derived(props.strokeWidth ?? 1.5);
	const variant = $derived(props.variant ?? 'default');
	const isOpen = $derived(props.isOpen);
	const disabled = $derived(props.disabled ?? false);
	const className = $derived(props.class ?? '');
	const containerClass = $derived(props.containerClass ?? '');
	const container = $derived(props.container ?? 'none');
	const containerSize = $derived(props.containerSize ?? 'md');
	const shape = $derived(props.shape ?? 'circle');
	const color = $derived(props.color ?? 'default');
	const filled = $derived(props.filled ?? false);

	const effectiveName = $derived.by(() => {
		const normalizedName = normalizeIconName(name || 'box');
		const isChevronLike = normalizedName === 'chevron' || normalizedName.startsWith('chevron-');
		if (!isChevronLike || isOpen === undefined) {
			return normalizedName;
		}
		return isOpen ? 'chevron-up' : 'chevron-down';
	});

	// Always a positive pixel size: an svg without width/height collapses to 0 in flex rows.
	const pixelSize = $derived.by(() =>
		typeof size === 'number'
			? size > 0
				? size
				: TOKEN_ICON_SIZE.md
			: (TOKEN_ICON_SIZE[size] ?? TOKEN_ICON_SIZE.md)
	);

	const iconClasses = $derived.by(() =>
		effectiveName === 'chevron-up' ||
		effectiveName === 'chevron-down' ||
		effectiveName === 'chevron-left' ||
		effectiveName === 'chevron-right' ||
		effectiveName === 'chevron'
			? 'icon__icon-chevron'
			: 'icon__icon'
	);

	const containerClasses = $derived.by(() => {
		if (container === 'circle') {
			return [
				'icon__icon-circle',
				filled ? 'icon__icon-circle--filled' : '',
				disabled ? 'icon__icon-circle--disabled' : '',
				`icon__icon-circle--${containerSize}`,
				containerClass
			]
				.filter(Boolean)
				.join(' ');
		}
		if (container === 'wrapper') {
			return ['icon__icon-wrapper', containerClass].filter(Boolean).join(' ');
		}
		return containerClass;
	});

	// default keeps currentColor; an explicit color string wins over the tone.
	const toneClass = $derived(variant === 'default' ? '' : `icon--tone-${variant}`);
	const iconColor = $derived(color === 'default' ? undefined : color);
	// Without an explicit shape the wrapper stays rounded and the circle stays round.
	const shapeClass = $derived(props.shape ? `icon--shape-${props.shape}` : '');

	const ariaLabel = $derived.by(() =>
		typeof props['aria-label'] === 'string' ? String(props['aria-label']) : undefined
	);

	let loadedSvg = $state('');
	let isLoading = $state(true);

	$effect(() => {
		const requestedName = effectiveName;
		const providedSvg = svg;

		if (providedSvg) {
			loadedSvg = providedSvg;
			isLoading = false;
			return;
		}

		if (import.meta.env.DEV && !isIconName(requestedName)) {
			console.warn(`[Icon] Unknown icon "${requestedName}", rendering "box" instead.`);
		}

		isLoading = true;
		let cancelled = false;

		resolveIconSvg(requestedName).then((resolved) => {
			if (!cancelled) {
				loadedSvg = resolved;
				isLoading = false;
			}
		});

		return () => {
			cancelled = true;
		};
	});

	const localSvg = $derived(loadedSvg);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			containerClass: _containerClass,
			name: _name,
			svg: _svg,
			size: _size,
			strokeWidth: _strokeWidth,
			variant: _variant,
			isOpen: _isOpen,
			disabled: _disabled,
			container: _container,
			containerSize: _containerSize,
			shape: _shape,
			color: _color,
			filled: _filled,
			...rest
		} = props;
		return rest;
	});

	return {
		get name() {
			return name;
		},
		get svg() {
			return svg;
		},
		get size() {
			return size;
		},
		get strokeWidth() {
			return strokeWidth;
		},
		get variant() {
			return variant;
		},
		get isOpen() {
			return isOpen;
		},
		get disabled() {
			return disabled;
		},
		get className() {
			return className;
		},
		get containerClass() {
			return containerClass;
		},
		get container() {
			return container;
		},
		get containerSize() {
			return containerSize;
		},
		get shape() {
			return shape;
		},
		get color() {
			return color;
		},
		get filled() {
			return filled;
		},
		get effectiveName() {
			return effectiveName;
		},
		get pixelSize() {
			return pixelSize;
		},
		get iconClasses() {
			return iconClasses;
		},
		get containerClasses() {
			return containerClasses;
		},
		get toneClass() {
			return toneClass;
		},
		get iconColor() {
			return iconColor;
		},
		get shapeClass() {
			return shapeClass;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		get localSvg() {
			return localSvg;
		},
		get isLoading() {
			return isLoading;
		},
		get restProps() {
			return restProps;
		},
		normalizeIconName,
		joinClasses
	};
}

export default createIconState;
