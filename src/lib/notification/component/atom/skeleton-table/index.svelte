<script lang="ts">
	import type { RecipeSkeletonTable } from '$stylist/notification/interface/recipe/skeleton-table';
	import { createSkeletonTableState } from '$stylist/notification/function/state/skeleton-table/index.svelte';

	let props: RecipeSkeletonTable = $props();
	const state = createSkeletonTableState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	<table class={state.tableClass}>
		<thead class={state.headerClass}>
			<tr>
				{#each state.columnIndexes as _}
					<th class={state.headerCellClass}>
						<div class="skeleton-table__bar" style={state.headerBarStyle}></div>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each state.rowIndexes as _}
				<tr>
					{#each state.columnIndexes as _}
						<td class={state.dataCellClass}>
							<div class="skeleton-table__bar" style={state.dataBarStyle}></div>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.skeleton-table {
		padding: 1rem;
	}

	.skeleton-table__table {
		width: 100%;
		border-collapse: collapse;
	}

	.skeleton-table__header {
		border-bottom: 1px solid var(--color-border-secondary);
	}

	.skeleton-table__header-cell {
		padding: 0.75rem 1rem;
		text-align: left;
	}

	.skeleton-table__cell {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--color-border-muted);
	}

	.skeleton-table__bar {
		height: 1rem;
		border-radius: var(--border-radius-base, 0.375rem);
		background-color: var(--color-skeleton, var(--color-background-secondary, #e5e7eb));
		animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
