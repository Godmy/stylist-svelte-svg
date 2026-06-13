<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import FunctionalTaxonomy from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'domain', type: 'text', defaultValue: 'interaction' },
		{ name: 'cluster', type: 'text', defaultValue: 'component' },
		{ name: 'joint', type: 'text', defaultValue: 'atom' },
		{ name: 'family', type: 'text', defaultValue: 'clickable' }
	];
</script>

<Story
	{controls}
	component={FunctionalTaxonomy}
	title="FunctionalTaxonomy"
	description="Compact taxonomy row for domain, cluster, joint, and family coordinates."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<FunctionalTaxonomy
				domain={values.domain as string}
				cluster={values.cluster as string}
				joint={values.joint as string}
				family={values.family as string}
			/>
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
