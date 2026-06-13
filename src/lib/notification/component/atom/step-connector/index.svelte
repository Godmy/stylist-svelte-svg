<script lang="ts">
	import createStepConnectorState from '$stylist/notification/function/state/step-connector/index.svelte';

	const props = $props();
	const state = createStepConnectorState(props);
</script>

<div {...props} class={state.classes}>
	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{/if}
</div>

<style>
	.step-connector {
		flex: 1;
		height: 2px;
		background-color: var(--color-border-secondary);
		transition: background-color 0.2s ease;
	}

	.step-connector.active {
		background-color: var(--color-primary-400);
	}

	.step-connector.completed {
		background-color: var(--color-primary-500);
	}
</style>
