<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import AccountProgressTracker from './index.svelte';

	type Props = {
		steps?: string[];
		currentStep?: number;
		class?: string;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'currentStep',
			type: 'number',
			defaultValue: 0,
			min: 0,
			max: 3
		}
	];
</script>

<Story
	id="molecules-account-progress-tracker"
	title="AccountProgressTracker"
	component={AccountProgressTracker}
	category="Molecules"
	description="Track account setup progress through multiple steps."
	{controls}
>
	{#snippet children(values: any)}
		{@const currentStep = typeof values.currentStep === 'number' ? values.currentStep : 0}
		{@const className = typeof values.class === 'string' ? values.class : undefined}
		<div class="_c1">
			<h2 class="_c2">AccountProgressTracker Story</h2>
			<AccountProgressTracker
				steps={['Account Info', 'Verification', 'Preferences', 'Complete']}
				{currentStep}
				class={className}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}
</style>
