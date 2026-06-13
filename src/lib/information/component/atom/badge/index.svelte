<script lang="ts">
	import createBadgeState from '$stylist/information/function/state/badge/index.svelte';
	import type { RecipeBadge } from '$stylist/information/interface/recipe/badge';

	let props: RecipeBadge = $props();

	const state = createBadgeState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</span>

<style>
</style>
