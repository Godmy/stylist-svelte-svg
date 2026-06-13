<script lang="ts">
	import createAnimatedProgressState from '$stylist/notification/function/state/animated-progress/index.svelte';

	const props = $props();
	const state = createAnimatedProgressState(props);
</script>

<div class={state.containerClasses} {...props}>
	<div class="animated-progress__header">
		<span class={state.labelClasses}>{props.label ?? 'Progress'}</span>
		{#if props.showPercentage}
			<span class={state.labelClasses}>{state.percentage}%</span>
		{/if}
	</div>
	<div class={state.progressBarBgClasses}>
		<div class={state.progressFillClasses} style={`width: ${state.percentage}%`}></div>
	</div>
</div>

<style>
	.animated-progress {
		width: 100%;
	}

	.animated-progress__header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.25rem;
	}

	.animated-progress__label {
		font-size: 0.875rem;
		font-weight: 500;
	}

	.animated-progress__track {
		width: 100%;
		height: 0.625rem;
		border-radius: 9999px;
		background-color: var(--color-background-tertiary);
		overflow: hidden;
	}

	.animated-progress__fill {
		height: 0.625rem;
		border-radius: 9999px;
		background-color: var(--color-primary-600);
		transition: width 0.3s ease-in-out;
	}
</style>
