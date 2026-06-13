<script lang="ts">
	import createResponseViewerState from '$stylist/notification/function/state/response-viewer/index.svelte';

	const props = $props();
	const state = createResponseViewerState(props);
</script>

<div class={state.containerClasses} {...props}>
	<div class={state.titleClasses}>{state.title}</div>
	<div class={state.statusClasses}>Status: {state.status}</div>
	<pre class={state.responsePreClasses}>{state.response}</pre>
</div>

<style>
	.c-response-viewer {
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-large, 0.5rem);
		padding: 1rem;
	}

	.c-response-viewer__title {
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.c-response-viewer__status {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		margin-bottom: 0.5rem;
	}

	.c-response-viewer__pre {
		font-size: 0.75rem;
		background-color: var(--color-background-secondary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-base, 0.375rem);
		padding: 0.5rem;
		overflow: auto;
		margin: 0;
	}
</style>
