<script lang="ts">
	import type { RecipeSkeletonRectangle } from '$stylist/notification/interface/recipe/skeleton-rectangle';
	import { createSkeletonRectangleState } from '$stylist/notification/function/state/skeleton-rectangle/index.svelte';

	let props: RecipeSkeletonRectangle = $props();
	const state = createSkeletonRectangleState(props);
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

	.skeleton-container.variant-rectangular {
		border-radius: var(--border-radius-base, 0.375rem);
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
