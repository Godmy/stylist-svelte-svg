<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CloseIcon from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'expanded', type: 'boolean', defaultValue: true }
	];

	let clicks = $state(0);
</script>

<Story
	{controls}
	component={CloseIcon}
	title="CloseIcon"
	description="Floating close affordance for expanded orbit cards."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2"></div>
			<div class="_c3">
				<CloseIcon
					expanded={Boolean(values.expanded)}
					onClick={() => {
						clicks += 1;
					}}
				/>
			</div>
			<p class="_c4">Clicks: {clicks}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;
		height: 10rem;
		overflow: hidden;
		border-radius: 1.5rem;
		background-color: #f1f5f9;
		padding: 2rem;
	}
	._c2 {
		position: absolute;
		top: 2rem;
		left: 2rem;
		height: 6rem;
		width: 16rem;
		border-radius: 28px;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
	._c3 {
		position: absolute;
		top: 32px;
		left: 232px;
	}
	._c4 {
		position: absolute;
		bottom: 1rem;
		left: 1.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
</style>
