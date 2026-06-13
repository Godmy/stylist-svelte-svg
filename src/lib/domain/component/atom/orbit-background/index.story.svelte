<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OrbitBackground from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'opened', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	component={OrbitBackground}
	title="OrbitBackground"
	description="Concentric orbit stage used to host token control nodes."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<OrbitBackground opened={Boolean(values.opened)}>
				{#snippet children()}
					<div class="_c2">Orbit center</div>
				{/snippet}
			</OrbitBackground>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		place-items: center;
		display: grid;
		border-radius: 1.5rem;
		background-color: linear-gradient(180deg, #e0f2fe, #f8fafc);
		padding: 2.5rem;
	}
	._c2 {
		place-items: center;
		background-color: rgba(255, 255, 255, 0.8);
		display: grid;
		border-radius: 9999px;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-sky-200);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: #334155;
	}
</style>
