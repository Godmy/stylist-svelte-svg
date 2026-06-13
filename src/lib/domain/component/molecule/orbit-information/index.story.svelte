<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OrbitInformation from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'opened', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	component={OrbitInformation}
	title="OrbitInformation"
	description="Information-level token nodes rendered on the middle orbit ring."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2 border-cyan-200/70 bg-white/70">
				<OrbitInformation opened={Boolean(values.opened)} />
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		place-items: center;
		display: grid;
		border-radius: 1.5rem;
		background-color: linear-gradient(180deg, #ecfeff, #f8fafc);
		padding: 2.5rem;
	}
	._c2 {
		position: relative;
		height: 20rem;
		width: 20rem;
		border-radius: 9999px;
		border-width: 1px;
		border-style: solid;
	}
</style>
