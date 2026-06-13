<script lang="ts">
	import type { RecipeDot } from '$stylist/information/interface/recipe/dot';
	import createDotState from '$stylist/information/function/state/dot/index.svelte';

	let props: RecipeDot = $props();

	const state = createDotState(props);

	const restProps = $derived(
		(() => {
			const { class: _class, color: _color, size: _size, ...rest } = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}></span>

<style>
</style>
