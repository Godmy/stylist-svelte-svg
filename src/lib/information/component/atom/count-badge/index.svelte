<script lang="ts">
	import createCountBadgeState from '$stylist/information/function/state/count-badge/index.svelte';
	import type { RecipeCountBadge } from '$stylist/information/interface/recipe/count-badge';

	let props: RecipeCountBadge = $props();

	const state = createCountBadgeState(props);

	const restProps = $derived(
		(() => {
			const { class: _class, count: _count, max: _max, showZero: _showZero, ...rest } = props;
			return rest;
		})()
	);
</script>

{#if state.showZero || state.count > 0}
	<span class={state.classes} {...restProps}>
		{state.displayCount}
	</span>
{/if}

<style>
</style>
