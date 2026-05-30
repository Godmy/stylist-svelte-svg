<script lang="ts">
	import type { ThemeInlineCodeRecipe } from '$stylist/typography/interface/recipe/inline-code';
	import { createInlineCodeState } from '$stylist/typography/function/state/inline-code';

	let props: ThemeInlineCodeRecipe = $props();

	const state = createInlineCodeState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<code class={state.classes} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</code>

<style>
	.c-typography-inline-code {
		padding: 0.125rem 0.375rem;
		border-radius: 0.375rem;
		background: var(--color-neutral-100);
		color: var(--color-danger-500);
		font-family: var(--font-family-mono, monospace);
		font-size: var(--text-size-sm, 0.875rem);
	}
</style>
