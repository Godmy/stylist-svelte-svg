<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Tabs from '$stylist/control/component/molecule/tabs/index.svelte';
	import Tab from './index.svelte';
	import TabList from '../tab-list/index.svelte';
	import TabPanels from '../tab-panels/index.svelte';
	import TabPanel from '../tab-panel/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'selectedId',
			type: 'select',
			defaultValue: 'overview',
			options: ['overview', 'activity', 'settings']
		},
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'ghost', 'outline']
		},
		{ name: 'disableSettings', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={Tab} title="Tab" description="Single tab item used inside Tabs." {controls}>
	{#snippet children(values: any)}
		<Tabs selectedId={values.selectedId} size={values.size} variant={values.variant}>
			<TabList class="_c1">
				<Tab id="overview">Overview</Tab>
				<Tab id="activity">Activity</Tab>
				<Tab id="settings" disabled={values.disableSettings}>Settings</Tab>
			</TabList>
			<TabPanels class="_c2">
				<TabPanel id="overview">Project summary and latest highlights.</TabPanel>
				<TabPanel id="activity">Recent actions, updates, and timeline events.</TabPanel>
				<TabPanel id="settings">Configuration options for this workspace.</TabPanel>
			</TabPanels>
		</Tabs>
	{/snippet}
</Story>

<style>
	._c1 {
		margin-bottom: 0.75rem;
	}
	._c2 {
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
</style>
