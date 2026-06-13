<script lang="ts">
	import type { RecipeSkeletonText } from '$stylist/notification/interface/recipe/skeleton-text';
	import { createSkeletonTextState } from '$stylist/notification/function/state/skeleton-text/index.svelte';

	let props: RecipeSkeletonText = $props();
	const state = createSkeletonTextState(props);
</script>

<div class={state.rootClass} style={state.style} {...state.restProps}>
	{#if state.content}
		{@render state.content()}
	{/if}
</div>

<style>
	.skeleton-container {
		display: block;
		background-color: var(--color-background-secondary, #e5e7eb);
		animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	.skeleton-container.variant-text {
		height: 1rem;
		border-radius: 0.125rem;
	}

	@keyframes skeleton-pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style>
