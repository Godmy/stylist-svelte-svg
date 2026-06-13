<script lang="ts">
	import { createSkeletonState } from '$stylist/notification/function/state/skeleton/index.svelte';
	import type { SlotSkeleton as ISkeletonProps } from '$stylist/notification/interface/slot/skeleton';

	let props = $props<
		{
			variant?: 'text' | 'card' | 'image' | 'icon';
			width?: string;
			height?: string;
			class?: string;
		} & ISkeletonProps
	>();

	const state = createSkeletonState(props);
</script>

<div
	class={state.rootClass}
	style={state.style}
	aria-busy="true"
	aria-live="polite"
	{...state.restProps}
></div>

<style>
	.skeleton-container {
		display: block;
		background-color: var(--color-background-secondary, #e5e7eb);
		animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	.skeleton-container.variant-text {
		border-radius: 0.125rem;
		height: 1rem;
	}
	.skeleton-container.variant-card {
		border-radius: var(--border-radius-base, 0.375rem);
		height: 3rem;
	}
	.skeleton-container.variant-image {
		border-radius: var(--border-radius-base, 0.375rem);
		height: 3rem;
	}
	.skeleton-container.variant-icon {
		border-radius: 9999px;
	}
	.skeleton-container.variant-circular {
		border-radius: 9999px;
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
