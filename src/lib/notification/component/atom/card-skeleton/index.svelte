<script lang="ts">
	import type { RecipeCardSkeleton } from '$stylist/notification/interface/recipe/card-skeleton';
	import { createCardSkeletonState } from '$stylist/notification/function/state/card-skeleton/index.svelte';
	import Skeleton from '$stylist/notification/component/atom/skeleton/index.svelte';

	let {
		count = 3,
		showAvatar = false,
		class: className = '',
		...restProps
	}: RecipeCardSkeleton = $props();

	const state = createCardSkeletonState({ count, showAvatar, class: className });
</script>

<div class={state.rootClass} {...restProps}>
	{#each state.cards as _}
		<div class={state.cardClass}>
			<div class="card-skeleton__header">
				{#if showAvatar}
					<Skeleton variant="icon" width="48px" height="48px" />
				{/if}
				<div class="card-skeleton__info">
					<Skeleton width="80%" height="1.25rem" />
					<Skeleton width="60%" height="1rem" />
				</div>
			</div>
			<div class="card-skeleton__body">
				<Skeleton width="100%" height="1rem" />
				<Skeleton width="90%" height="1rem" />
				<Skeleton width="70%" height="1rem" />
			</div>
		</div>
	{/each}
</div>

<style>
	.card-skeleton {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.card-skeleton {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.card-skeleton {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.card-skeleton__item {
		overflow: hidden;
		border-radius: var(--border-radius-large, 0.5rem);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
	}

	.card-skeleton__header {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.card-skeleton__info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.card-skeleton__body {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
