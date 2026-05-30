<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
	import type { AnimatedNumberRecipe as AnimatedNumberProps } from '$stylist/animation/interface/recipe/animated-number';
	import { createAnimatedNumberState } from '$stylist/animation/function/state/animated-number';

	let props: AnimatedNumberProps & InformationHTMLAttributes<HTMLSpanElement> = $props();
	const state = createAnimatedNumberState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				value: _value,
				format: _format,
				prefix: _prefix,
				suffix: _suffix,
				separator: _separator,
				decimals: _decimals,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}>
	{state.prefix}{state.formattedValue}{state.suffix}
</span>

<style>
	.c-animation-animated-number {
		font-family: var(--font-family-mono, monospace);
		font-variant-numeric: tabular-nums;
	}
</style>
