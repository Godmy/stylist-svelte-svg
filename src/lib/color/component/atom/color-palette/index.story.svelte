<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ColorPalette from './index.svelte';

	const defaultColors = [
		{ name: 'Red', value: '#EF4444' },
		{ name: 'Blue', value: '#3B82F6' },
		{ name: 'Green', value: '#10B981' },
		{ name: 'Yellow', value: '#F59E0B' },
		{ name: 'Purple', value: '#8B5CF6' },
		{ name: 'Pink', value: '#EC4899' },
		{ name: 'Indigo', value: '#6366F1' },
		{ name: 'Gray', value: '#6B7280' }
	];

	const columnOptions = [2, 3, 4, 5, 6];

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'title',
			type: 'text',
			defaultValue: 'Color Palette',
			description: 'Title for the color palette'
		},
		{
			name: 'showLabels',
			type: 'boolean',
			defaultValue: true,
			description: 'Whether to show color labels'
		},
		{
			name: 'showValues',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether to show color values'
		},
		{
			name: 'columns',
			type: 'select',
			defaultValue: 4,
			options: columnOptions,
			description: 'Number of columns to display'
		}
	];
</script>

<Story
	id="atoms-color-palette"
	title="ColorPalette"
	component={ColorPalette}
	category="Atoms/Interaction/Controls/Selectors"
	description="ColorPalette component for selecting colors."
	tags={['color', 'palette', 'selector', 'picker']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ColorPalette
				title={values.title as string}
				showLabels={values.showLabels as boolean}
				showValues={values.showValues as boolean}
				columns={Number(values.columns) || 4}
				colors={defaultColors}
				onValueChange={() => {}}
			/>
		</div>
	{/snippet}

	{#snippet variants()}
		<div class="_c2">
			<div>
				<h3 class="_c3">With Labels</h3>
				<ColorPalette
					colors={defaultColors}
					title="Palette with Labels"
					showLabels={true}
					showValues={false}
					columns={4}
				/>
			</div>
			<div>
				<h3 class="_c3">With Values</h3>
				<ColorPalette
					colors={defaultColors}
					title="Palette with Values"
					showLabels={true}
					showValues={true}
					columns={3}
				/>
			</div>
			<div>
				<h3 class="_c3">Compact View</h3>
				<ColorPalette
					colors={defaultColors.slice(0, 4)}
					title="Compact Palette"
					showLabels={false}
					showValues={false}
					columns={4}
				/>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 2rem;
		padding: 1rem;
	}
	._c3 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
</style>
