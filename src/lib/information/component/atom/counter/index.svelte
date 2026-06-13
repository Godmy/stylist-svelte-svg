<script lang="ts">
	import type { RecipeCounter } from '$stylist/information/interface/recipe/counter';
	import createCounterState from '$stylist/information/function/state/counter/index.svelte';

	let props: RecipeCounter = $props();

	const state = createCounterState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				count: _count,
				max: _max,
				variant: _variant,
				size: _size,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}>
	{state.displayCount}
</span>

<style>
</style>
