<script lang="ts">
	import createSvgState from '$stylist/svg/component/atom/svg/state.svelte';
	import type { RecipeSvg } from '$stylist/svg/interface/recipe/svg';

	let props: RecipeSvg = $props();
	const state = createSvgState(() => props);
</script>

<span class={['svg-wrap', props.disabled && 'svg-wrap--disabled']}>
	{@html state.markup}
</span>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer svg {
		:global {
			:where(.svg-wrap) {
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
			:where(.svg-wrap--disabled) {
				opacity: var(--opacity-50, 0.5);
			}
			:where(.svg-wrap > svg) {
				display: block;
			}
		}
	}
</style>
