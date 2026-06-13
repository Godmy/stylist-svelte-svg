<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import StepConnector from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'status',
			type: 'select',
			defaultValue: 'active',
			options: ['pending', 'active', 'completed', 'error']
		},
		{
			name: 'class',
			type: 'text',
			defaultValue: 'h-1.5 w-20 rounded-full bg-[--color-border-secondary]'
		}
	];
</script>

<Story
	component={StepConnector}
	title="StepConnector"
	description="Visual bridge between steps in a multi-step flow."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<span>Step 1</span>
			<StepConnector status={values.status} class={values.class} />
			<span>Step 2</span>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}
</style>
