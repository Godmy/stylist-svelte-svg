<script lang="ts">
	import createProgressBarState from '$stylist/notification/function/state/progress-bar/index.svelte';

	const props = $props();
	const state = createProgressBarState(props);
</script>

<div class={state.containerClass} {...props}>
	{#if state.label || state.showPercentage}
		<div class={state.labelWrapperClass}>
			{#if state.label}
				<span class={state.labelClass}>{state.label}</span>
			{/if}
			{#if state.showPercentage}
				<span class={state.labelClass}>{state.percentage.toFixed(0)}%</span>
			{/if}
		</div>
	{/if}
	<div class={state.trackClass}>
		<div
			class={state.fillClass}
			style={state.fillStyle}
			role="progressbar"
			aria-valuenow={state.value}
			aria-valuemin={0}
			aria-valuemax={state.max}
			aria-label={state.label}
		></div>
	</div>
</div>

<style>
	.progress-bar-container {
		width: 100%;
	}

	.progress-bar-label-wrapper {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.25rem;
	}

	.progress-bar-label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.progress-bar-track {
		width: 100%;
		background-color: var(--color-background-secondary);
		overflow: hidden;
		border-radius: var(--border-radius-base, 0.375rem);
	}

	.progress-bar-track.size-xs {
		height: 0.25rem;
		border-radius: 0.125rem;
	}
	.progress-bar-track.size-sm {
		height: 0.5rem;
		border-radius: var(--border-radius-base, 0.375rem);
	}
	.progress-bar-track.size-md {
		height: 0.75rem;
		border-radius: var(--border-radius-base, 0.375rem);
	}
	.progress-bar-track.size-lg {
		height: 1rem;
		border-radius: var(--border-radius-large, 0.5rem);
	}
	.progress-bar-track.size-xl {
		height: 1.25rem;
		border-radius: var(--border-radius-large, 0.5rem);
	}
	.progress-bar-track.size-2xl {
		height: 1.5rem;
		border-radius: 0.75rem;
	}

	.progress-bar-fill {
		height: 100%;
		border-radius: inherit;
		transition: width 0.3s ease-in-out;
	}

	.progress-bar-fill.variant-primary {
		background-color: var(--color-primary-600);
	}
	.progress-bar-fill.variant-default {
		background-color: var(--color-primary-600);
	}
	.progress-bar-fill.variant-secondary {
		background-color: var(--color-secondary-600);
	}
	.progress-bar-fill.variant-success {
		background-color: var(--color-success-600);
	}
	.progress-bar-fill.variant-warning {
		background-color: var(--color-warning-500);
	}
	.progress-bar-fill.variant-danger {
		background-color: var(--color-danger-600);
	}
	.progress-bar-fill.variant-error {
		background-color: var(--color-danger-600);
	}
	.progress-bar-fill.variant-info {
		background-color: var(--color-info-600);
	}
	.progress-bar-fill.variant-ghost {
		background-color: var(--color-primary-300);
	}
	.progress-bar-fill.variant-subtle {
		background-color: var(--color-neutral-400);
	}
	.progress-bar-fill.variant-neutral {
		background-color: var(--color-neutral-500);
	}
</style>
