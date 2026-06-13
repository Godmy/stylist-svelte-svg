<script lang="ts">
	import createContainerQueryState from '$stylist/layout/function/state/container-query/index.svelte';
	import type { ContainerQueryProps } from '$stylist/layout/type/struct/layout-extended/container-query-props';

	let props: ContainerQueryProps = $props();
	const state = createContainerQueryState(props);
</script>

<div
	class={['layout-container-query', props.class].filter(Boolean).join(' ')}
	style={state.containerStyle}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.layout-container-query {
		width: 100%;
	}
</style>
