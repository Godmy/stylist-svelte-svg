import type { TOKEN_ORIENTATION } from '$stylist/layout/const/enum/orientation';
import type { SplitLayoutGap } from '$stylist/layout/type/enum/split-layout-gap';
import type { SplitLayoutPanelSize } from '$stylist/layout/type/enum/split-layout-panel-size';
import type { SplitLayoutProps } from '$stylist/layout/type/struct/layout-extended/split-layout-props';

export function createSplitLayoutState(props: SplitLayoutProps) {
	const direction = $derived<(typeof TOKEN_ORIENTATION)[number]>(props.direction ?? 'horizontal');
	const gap = $derived<SplitLayoutGap>(props.gap ?? 'md');
	const primarySize = $derived<SplitLayoutPanelSize>(props.primarySize ?? '2/3');
	const secondarySize = $derived<SplitLayoutPanelSize>(props.secondarySize ?? '1/3');
	const responsive = $derived(props.responsive ?? true);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			direction: _direction,
			gap: _gap,
			primarySize: _primarySize,
			secondarySize: _secondarySize,
			responsive: _responsive,
			primary: _primary,
			secondary: _secondary,
			...rest
		} = props;
		return rest;
	});

	return {
		get direction() {
			return direction;
		},
		get gap() {
			return gap;
		},
		get primarySize() {
			return primarySize;
		},
		get secondarySize() {
			return secondarySize;
		},
		get responsive() {
			return responsive;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createSplitLayoutState;
