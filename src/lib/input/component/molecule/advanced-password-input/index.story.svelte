<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import AdvancedPasswordInput from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const controls = [
		{
			name: 'placeholder',
			type: 'text' as TokenControllerType,
			defaultValue: 'Enter password',
			description: 'Placeholder text for the password input'
		},
		{
			name: 'showStrength',
			type: 'boolean' as TokenControllerType,
			defaultValue: true,
			description: 'Whether to show the password strength indicator'
		}
	];
</script>

<Story
	{controls}
	title="AdvancedPasswordInput Component"
	description="A password input field with strength indicator and visibility toggle"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<div class="_c2">
				<h2 class="_c3">Password Input</h2>
				<p class="_c4">Password field with strength indicator</p>
			</div>
			<AdvancedPasswordInput
				placeholder={controlValues.placeholder}
				showStrengthMeter={controlValues.showStrength}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		margin-left: auto;
		margin-right: auto;
		max-width: 28rem;
		padding: 1.5rem;
	}
	._c2 {
		margin-bottom: 1.5rem;
	}
	._c3 {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c4 {
		color: var(--color-text-secondary);
	}
</style>
