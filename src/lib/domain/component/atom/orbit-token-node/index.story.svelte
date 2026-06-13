<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OrbitTokenNode from './index.svelte';
	import { L6_TOKEN_DEFINITIONS } from '../../molecule/orbit-control-definitions/index';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'opened', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	component={OrbitTokenNode}
	title="OrbitTokenNode"
	description="Token control node that opens a contextual editor inside the orbit shell."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2 _c1 border-sky-200/80"></div>
			<OrbitTokenNode
				id="controls"
				icon="controls"
				label="Controls"
				opened={Boolean(values.opened)}
				definition={L6_TOKEN_DEFINITIONS.controls}
				style="transform: rotate(30deg) translate(90px) rotate(-30deg);"
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;
		height: 18rem;
		overflow: hidden;
		border-radius: 1.5rem;
		background-color: radial-gradient(circle at center, #dbeafe, #eff6ff 60%, #e2e8f0);
	}
	._c2 {
		position: absolute;
		height: 11rem;
		width: 11rem;
		border-radius: 9999px;
		border-width: 1px;
		border-style: solid;
	}

	._c1 {
		top: 50%;
		left: 50%;
		transform: translateY(-50%);
	}
</style>
