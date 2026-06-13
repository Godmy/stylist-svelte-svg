<script lang="ts">
	import type { RecipeTableRow as RecipeTableRow } from '$stylist/information/interface/recipe/table-row';
	import createTableRowState from '$stylist/information/function/state/table-row/index.svelte';

	let props: RecipeTableRow = $props();
	const state = createTableRowState(props);
</script>

<tr {...state.restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</tr>

<style>
</style>
