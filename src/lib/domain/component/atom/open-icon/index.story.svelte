<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OpenIcon from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'orbitOpen', type: 'boolean', defaultValue: false },
		{ name: 'dragging', type: 'boolean', defaultValue: false }
	];

	let toggles = $state(0);
</script>

<Story
	{controls}
	component={OpenIcon}
	title="OpenIcon"
	description="Seed button that toggles the orbit panel between closed and opened states."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<OpenIcon
				orbitOpen={Boolean(values.orbitOpen)}
				dragging={Boolean(values.dragging)}
				style="left: 64px; top: 72px;"
				onClick={() => {
					toggles += 1;
				}}
			/>
			<p class="_c2">Toggle clicks: {toggles}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;
		height: 12rem;
		overflow: hidden;
		border-radius: 1.5rem;
		background-color: linear-gradient(135deg, #0f172a, #1e3a8a);
		padding: 2rem;
	}
	._c2 {
		position: absolute;
		bottom: 1rem;
		left: 1.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-blue-100, #blue-100);
	}
</style>
