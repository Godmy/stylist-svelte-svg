<script lang="ts">
	import type { ThemeCaptionRecipe } from '$stylist/typography/interface/recipe/caption';
	import { createCaptionState } from '$stylist/typography/function/state/caption';

	let props: ThemeCaptionRecipe = $props();
	const state = createCaptionState(props);
</script>

<div {...state.restProps} class={state.classes} {...state.attrs}>
	{#if state.children}
		{@render state.children()}
	{/if}
</div>

<style>
	.c-typography-caption {
		display: block;
		font-size: var(--text-size-sm, 0.875rem);
		line-height: var(--line-height-sm, 1.5);
		color: var(--color-text-secondary);
	}
</style>
