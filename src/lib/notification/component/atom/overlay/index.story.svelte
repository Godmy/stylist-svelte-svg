<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Overlay from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'loading', type: 'boolean', defaultValue: true },
		{ name: 'message', type: 'text', defaultValue: 'Loading visualization...' },
		{ name: 'spinnerSize', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story
	component={Overlay}
	title="Overlay"
	description="Blocking loading layer for charts, cards, and panels."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2">
				<h3 class="_c3">Sales performance</h3>
				<p class="_c4">Chart container placeholder used for overlay preview.</p>
			</div>
			<div class="_c5">
				<div class="_c6"></div>
				<div class="_c6"></div>
				<div class="_c6"></div>
			</div>
			<Overlay loading={values.loading} message={values.message} spinnerSize={values.spinnerSize} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;
		min-height: 14rem;
		overflow: hidden;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c2 > * + * {
		margin-top: 0.5rem;
	}
	._c3 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c4 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c5 {
		margin-top: 1.25rem;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}
	._c6 {
		height: 6rem;
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
	}
</style>
