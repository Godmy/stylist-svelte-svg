<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import AdvancedToggle from './index.svelte';

	type AdvancedToggleStoryProps = {
		label: string;
		checked: boolean;
		disabled: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Enable notifications'
		},
		{
			name: 'checked',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	id="molecules-advanced-toggle"
	title="AdvancedToggle"
	component={AdvancedToggle}
	category="Molecules"
	description="An advanced toggle switch component."
	tags={['form', 'input', 'switch']}
	{controls}
>
	{#snippet children(values: any)}
		{@const storyProps = values as AdvancedToggleStoryProps}
		<div class="_c1">
			<h2 class="_c2">AdvancedToggle Story</h2>
			<AdvancedToggle
				label={storyProps.label}
				checked={storyProps.checked}
				disabled={storyProps.disabled}
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
