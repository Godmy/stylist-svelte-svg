<script lang="ts">
	import type { ThemeStrongRecipe } from '$stylist/typography/interface/recipe/strong';
	import { createStrongState } from '$stylist/typography/function/state/strong';

	let props: ThemeStrongRecipe = $props();
	const state = createStrongState(props);
</script>

<strong {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children()}
	{/if}
</strong>

<style>
	.c-typography-strong {
		display: inline;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.c-typography-strong--disabled {
		color: var(--color-text-tertiary);
	}

	.c-typography-strong--block {
		display: block;
	}
</style>
