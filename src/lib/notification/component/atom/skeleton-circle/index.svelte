<script lang="ts">
	import type { RecipeSkeletonCircle } from '$stylist/notification/interface/recipe/skeleton-circle';
	import { createSkeletonCircleState } from '$stylist/notification/function/state/skeleton-circle/index.svelte';

	let props: RecipeSkeletonCircle = $props();
	const state = createSkeletonCircleState(props);
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

	.skeleton-container.variant-circular {
		border-radius: 9999px;
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
