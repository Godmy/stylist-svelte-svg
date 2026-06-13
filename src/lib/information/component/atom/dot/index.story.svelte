<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Dot from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'color',
			type: 'select',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gray'],
			defaultValue: 'primary'
		},
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' }
	];
</script>

<Story
	id="atoms-dot"
	title="Dot"
	component={Dot}
	category="Atoms/Information/Indicators"
	description="A small status dot indicator."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Dot color={values.color} size={values.size} />
			<span class="_c2">Status Indicator</span>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		align-items: center;
	}
	._c1 > * + * {
		margin-left: 0.75rem;
	}
	._c2 {
		color: var(--color-text-primary);
	}
</style>
