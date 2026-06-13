<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Divider from './index.svelte';

	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'orientation',
			type: 'select',
			options: ['horizontal', 'vertical'],
			defaultValue: 'horizontal'
		},
		{
			name: 'align',
			type: 'select',
			options: ['start', 'center', 'end'],
			defaultValue: 'center'
		},
		{
			name: 'dashed',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Section'
		}
	];
</script>

<Story
	{controls}
	component={Divider}
	title="Divider Component"
	description="A visual separator with optional text label"
>
	{#snippet children(values: any)}
		{#if values.orientation === 'horizontal'}
			<div class="_c1">
				<Divider {...values} />
			</div>
		{:else}
			<div class="_c2">
				<Divider {...values} />
			</div>
		{/if}
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c2 {
		height: 8rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
</style>
