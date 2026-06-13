<script lang="ts">
	import createLoadingBoundaryState from '$stylist/notification/function/state/loading-boundary/index.svelte';

	const props = $props();
	const state = createLoadingBoundaryState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#if state.loading}
		<div class="c-loading-boundary__loading">Loading...</div>
	{:else if state.error}
		<div class="c-loading-boundary__error">{state.error}</div>
	{:else if props.children}
		{#if props.children}{@render props.children()}{/if}
	{:else}
		Ready
	{/if}
</div>

<style>
	.c-loading-boundary {
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-large, 0.5rem);
		padding: 1rem;
	}

	.c-loading-boundary__loading {
		font-size: 0.875rem;
	}

	.c-loading-boundary__error {
		font-size: 0.875rem;
		color: var(--color-danger-600);
	}
</style>
