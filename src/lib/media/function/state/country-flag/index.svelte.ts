import type { RecipeCountryFlag } from '$stylist/media/interface/recipe/country-flag';

export function createCountryFlagState(props: RecipeCountryFlag) {
	const countryCode = $derived(props.countryCode ?? '');
	const size = $derived(props.size ?? 24);
	const emoji = $derived(`media__TODO media__TODO--${countryCode}`);
	const isValid = $derived(Boolean(countryCode && countryCode.length === 2));
	const classes = $derived('media__country-flag');
	const style = $derived(`media__TODO media__TODO--${size}`);
	const fallbackStyle = $derived(`media__TODO media__TODO--${size}`);
	const fallbackClasses = $derived('media__country-flag-fallback');

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			countryCode: _countryCode,
			size: _size,
			content: _content,
			...rest
		} = props;
		return rest;
	});

	return {
		get countryCode() {
			return countryCode;
		},
		get size() {
			return size;
		},
		get emoji() {
			return emoji;
		},
		get isValid() {
			return isValid;
		},
		get classes() {
			return classes;
		},
		get style() {
			return style;
		},
		get fallbackStyle() {
			return fallbackStyle;
		},
		get fallbackClasses() {
			return fallbackClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
