<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import DomainListHeader from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Entities' },
		{ name: 'count', type: 'number', defaultValue: 12 }
	];
</script>

<Story
	{controls}
	component={DomainListHeader}
	title="DomainListHeader"
	description="List header with a compact title and entity count."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<DomainListHeader label={values.label as string} count={Number(values.count)} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
</style>
