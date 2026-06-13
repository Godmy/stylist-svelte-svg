<script lang="ts">
	import createAccountProgressTrackerState from '$stylist/notification/function/state/account-progress-tracker/index.svelte';

	const props = $props();
	const state = createAccountProgressTrackerState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#each state.steps as step, i}
		<div class="apt-row">
			<div class={state.getStepClasses(i)}>
				{i + 1}
			</div>
			{#if i < state.steps.length - 1}
				<div class={state.getConnectorClasses(i)}></div>
			{/if}
		</div>
	{/each}
	<div class="apt-progress">
		<p>
			Step {state.localCurrentStep + 1} of {state.steps.length}: {state.steps[
				state.localCurrentStep
			]}
		</p>
	</div>
</div>

<style>
	.account-progress-tracker-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0;
	}

	.apt-row {
		display: flex;
		align-items: center;
	}

	.apt-step {
		display: flex;
		width: 2rem;
		height: 2rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: 2px solid var(--color-border-primary);
		font-size: 0.875rem;
		font-weight: 500;
	}

	.apt-step--active {
		background-color: var(--color-primary-500);
		border-color: var(--color-primary-500);
		color: var(--color-text-inverse);
	}

	.apt-connector {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		height: 0.25rem;
		width: 4rem;
		border-bottom: 2px solid var(--color-border-primary);
	}

	.apt-connector--active {
		background-color: var(--color-primary-500);
		border-bottom: none;
	}

	.apt-progress {
		width: 100%;
		margin-top: 0.75rem;
		font-size: 0.875rem;
	}
</style>
