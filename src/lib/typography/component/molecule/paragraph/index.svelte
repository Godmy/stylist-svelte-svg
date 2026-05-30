<script lang="ts">
	import type { ThemeParagraphRecipe } from '$stylist/typography/interface/recipe/paragraph';
	import { createParagraphState } from '$stylist/typography/function/state/paragraph';

	let props: ThemeParagraphRecipe = $props();
	const state = createParagraphState(props);
</script>

<p {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children()}
	{/if}
</p>

<style>
	.c-typography-paragraph {
		display: block;
		margin: 0;
		font-size: var(--text-size-md, 1rem);
		line-height: var(--line-height-md, 1.6);
		color: var(--color-text-primary);
	}

	.c-typography-paragraph--disabled {
		color: var(--color-text-tertiary);
	}

	.c-typography-paragraph--block {
		display: block;
	}
</style>
