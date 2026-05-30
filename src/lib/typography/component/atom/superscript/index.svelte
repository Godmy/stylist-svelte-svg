<script lang="ts">
	import type { ThemeSuperscriptRecipe } from '$stylist/typography/interface/recipe/superscript';
	import { createSuperscriptState } from '$stylist/typography/function/state/superscript';

	let props: ThemeSuperscriptRecipe = $props();
	const state = createSuperscriptState(props);
</script>

<sup {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children()}
	{/if}
</sup>

<style>
	.c-typography-superscript {
		display: inline;
		font-size: var(--text-size-xs, 0.75rem);
		vertical-align: super;
		color: var(--color-text-primary);
	}

	.c-typography-superscript--disabled {
		color: var(--color-text-tertiary);
	}

	.c-typography-superscript--block {
		display: block;
	}
</style>
