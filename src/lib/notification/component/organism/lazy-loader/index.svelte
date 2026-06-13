<script lang="ts">
	import createLazyLoaderState from '$stylist/notification/function/state/lazy-loader/index.svelte';

	const props = $props();
	const state = createLazyLoaderState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#if state.loading}
		<div class="c-lazy-loader__text">{state.text}</div>
	{:else if props.children}
		{#if props.children}{@render props.children()}{/if}
	{:else}
		Loaded content
	{/if}
</div>

<style>
	.c-lazy-loader {
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-large, 0.5rem);
		padding: 1rem;
	}

	.c-lazy-loader__text {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		animation: lazy-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	@keyframes lazy-pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style>
