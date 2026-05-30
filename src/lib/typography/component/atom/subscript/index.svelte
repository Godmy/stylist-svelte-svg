<script lang="ts">
	import type { ThemeSubscriptRecipe } from '$stylist/typography/interface/recipe/subscript';
	import { createSubscriptState } from '$stylist/typography/function/state/subscript';

	let props: ThemeSubscriptRecipe = $props();
	const state = createSubscriptState(props);
</script>

<sub {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children()}
	{/if}
</sub>

<style>
	.c-typography-subscript {
		display: inline;
		font-size: var(--text-size-xs, 0.75rem);
		vertical-align: sub;
		color: var(--color-text-primary);
	}

	.c-typography-subscript--disabled {
		color: var(--color-text-tertiary);
	}

	.c-typography-subscript--block {
		display: block;
	}
</style>
