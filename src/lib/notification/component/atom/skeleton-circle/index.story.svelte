<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import SkeletonCircle from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'size', type: 'number', defaultValue: 48, min: 16, max: 180, step: 4 },
		{ name: 'class', type: 'text', defaultValue: '' }
	];
</script>

<Story
	component={SkeletonCircle}
	title="SkeletonCircle"
	description="Circular placeholder for avatars and icon blocks."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<SkeletonCircle size={values.size} class={values.class} />
			<div class="_c2">
				<div class="_c3"></div>
				<div class="_c4"></div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		align-items: center;
		gap: 1rem;
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c2 > * + * {
		margin-top: 0.5rem;
	}
	._c3 {
		height: 0.75rem;
		width: 7rem;
		border-radius: 0.25rem;
		background-color: var(--color-skeleton);
	}
	._c4 {
		height: 0.75rem;
		width: 5rem;
		border-radius: 0.25rem;
		background-color: var(--color-skeleton);
	}
</style>
