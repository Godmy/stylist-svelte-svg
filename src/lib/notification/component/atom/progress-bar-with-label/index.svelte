<script lang="ts">
	import createProgressBarWithLabelState from '$stylist/notification/function/state/progress-bar-with-label/index.svelte';

	const props = $props();
	const state = createProgressBarWithLabelState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#if state.label}
		<div class={state.labelWrapperClasses}>
			<span class={state.labelClasses}>{state.label}</span>
			{#if state.showPercentage}
				<span class={state.labelClasses}>{state.percentage}%</span>
			{/if}
		</div>
	{/if}
	<div class={state.trackClasses}>
		<div class={state.fillClasses} style={`width: ${state.percentage}%`}></div>
	</div>
	{#if !state.label && state.showPercentage}
		<div class="pbwl__footer">
			<span class="pbwl__pct">{state.percentage}%</span>
		</div>
	{/if}
</div>

<style>
	.pbwl {
		width: 100%;
	}

	.pbwl__header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.25rem;
	}

	.pbwl__label {
		font-size: 0.875rem;
		font-weight: 500;
	}

	.pbwl__track {
		width: 100%;
		height: 0.5rem;
		border-radius: 9999px;
		background-color: var(--color-background-tertiary);
		overflow: hidden;
	}

	.pbwl__fill {
		height: 100%;
		border-radius: 9999px;
		transition: width 0.3s ease-in-out;
	}

	.pbwl__fill--blue {
		background-color: var(--color-primary-500);
	}
	.pbwl__fill--green {
		background-color: var(--color-success-500);
	}
	.pbwl__fill--red {
		background-color: var(--color-danger-500);
	}
	.pbwl__fill--yellow {
		background-color: #eab308;
	}
	.pbwl__fill--purple {
		background-color: var(--color-secondary-500);
	}

	.pbwl__footer {
		margin-top: 0.25rem;
		text-align: right;
	}

	.pbwl__pct {
		font-size: 0.875rem;
		font-weight: 500;
	}
</style>
