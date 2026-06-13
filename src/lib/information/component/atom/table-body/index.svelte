<script lang="ts">
	import type { RecipeTableSection as RecipeTableSection } from '$stylist/information/interface/recipe/table-section';
	import createTableBodyState from '$stylist/information/function/state/table-body/index.svelte';

	let props: RecipeTableSection = $props();
	const state = createTableBodyState(props);
</script>

<tbody {...state.restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</tbody>

<style>
</style>
