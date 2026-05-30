<script lang="ts">
	import type { ThemeSmallRecipe } from '$stylist/typography/interface/recipe/small';
	import { createSmallState } from '$stylist/typography/function/state/small';

	let props: ThemeSmallRecipe = $props();
	const state = createSmallState(props);
</script>

<small {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children()}
	{/if}
</small>

<style>
	.c-typography-small {
		display: inline;
		font-size: var(--text-size-sm, 0.875rem);
		color: var(--color-text-secondary);
	}

	.c-typography-small--disabled {
		color: var(--color-text-tertiary);
	}

	.c-typography-small--block {
		display: block;
	}
</style>
