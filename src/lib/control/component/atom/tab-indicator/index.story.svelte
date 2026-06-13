<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';

	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import TabIndicator from './index.svelte';

	const colorOptions = ['primary', 'secondary', 'success', 'warning', 'danger', 'gray'] as const;

	type Props = {
		width: string;

		left: string;

		color: (typeof colorOptions)[number];
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'width', type: 'text', defaultValue: '50px' },

		{ name: 'left', type: 'text', defaultValue: '0px' },

		{ name: 'color', type: 'select', defaultValue: 'primary', options: [...colorOptions] }
	];

	let activeTab = $state(0);

	const tabs = [
		{ label: 'Tab 1', width: '80px', left: '0px' },

		{ label: 'Tab 2', width: '90px', left: '90px' },

		{ label: 'Tab 3', width: '70px', left: '190px' }
	];

	function handleClick(index: number) {
		activeTab = index;
	}
</script>

<Story
	id="atoms-navigation-tab-indicator"
	title="TabIndicator"
	component={TabIndicator}
	category="Atoms"
	description="A visual indicator for the active tab in a tab navigation."
	{controls}
>
	{#snippet children(values: any)}
		{@const storyProps = values as Partial<Props>}

		{@const color = storyProps.color ?? 'primary'}

		{@const width = typeof storyProps.width === 'string' ? storyProps.width : '50px'}

		{@const left = typeof storyProps.left === 'string' ? storyProps.left : '0px'}

		<div class="_c1">
			<div class="_c2">
				{#each tabs as tab, i}
					<button
						class={`${activeTab === i ? 'ti-story-active' : 'ti-story-inactive'} _c6`}
						onclick={() => handleClick(i)}
					>
						{tab.label}
					</button>
				{/each}
			</div>

			<TabIndicator width={tabs[activeTab].width} left={tabs[activeTab].left} {color} />
		</div>

		<h3 class="_c3">Customizable Indicator</h3>

		<div class="_c1">
			<div class="_c4">
				<button class="_c5">Item A</button>

				<button class="_c5">Item B</button>

				<button class="_c5">Item C</button>
			</div>

			<TabIndicator {width} {left} {color} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;

		width: 100%;

		max-width: 28rem;

		border-bottom-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);
	}

	._c2 {
		display: flex;
	}

	._c3 {
		margin-top: 2rem;

		margin-bottom: 1rem;

		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 700;
	}

	._c4 {
		display: flex;

		justify-content: space-between;
	}

	._c5 {
		padding-left: 1rem;

		padding-right: 1rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-secondary);
	}

	._c6 {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}

	.ti-story-active {
		color: var(--color-primary-600);
	}
	.ti-story-inactive {
		color: var(--color-text-secondary);
	}
</style>
