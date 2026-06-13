<script lang="ts">
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Icon from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'name',
			type: 'select',
			defaultValue: 'search',
			options: ['search', 'plus', 'minus', 'check', 'x', 'chevron-down', 'chevron-up', 'box']
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: ['xs', 'sm', 'md', 'lg', 'xl']
		},
		{
			name: 'strokeWidth',
			type: 'text',
			defaultValue: '1.5'
		}
	];
</script>

<Story
	{controls}
	component={Icon}
	title="Icon Component"
	description="An icon component with various sizes and stroke widths"
	tags={['information', 'media', 'icon']}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2">
				<h2 class="_c3">Interactive Icon</h2>
				<Icon
					name={values.name as string}
					size={values.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
					strokeWidth={parseFloat(values.strokeWidth as string) || 1.5}
				/>
			</div>

			<div class="_c2">
				<h2 class="_c3">All Sizes</h2>
				<div class="_c4">
					<div class="_c5">
						<Icon name="search" size="xs" />
						<span class="_c6">XS</span>
					</div>
					<div class="_c5">
						<Icon name="search" size="sm" />
						<span class="_c6">SM</span>
					</div>
					<div class="_c5">
						<Icon name="search" size="md" />
						<span class="_c6">MD</span>
					</div>
					<div class="_c5">
						<Icon name="search" size="lg" />
						<span class="_c6">LG</span>
					</div>
					<div class="_c5">
						<Icon name="search" size="xl" />
						<span class="_c6">XL</span>
					</div>
				</div>
			</div>

			<div class="_c7">
				<h2 class="_c3">All Icons</h2>
				<div class="_c8">
					<div class="_c5">
						<Icon name="search" />
						<span class="_c6">Search</span>
					</div>
					<div class="_c5">
						<Icon name="plus" />
						<span class="_c6">Plus</span>
					</div>
					<div class="_c5">
						<Icon name="minus" />
						<span class="_c6">Minus</span>
					</div>
					<div class="_c5">
						<Icon name="check" />
						<span class="_c6">Check</span>
					</div>
					<div class="_c5">
						<Icon name="x" />
						<span class="_c6">X</span>
					</div>
					<div class="_c5">
						<Icon name="chevron-down" />
						<span class="_c6">Chevron Down</span>
					</div>
					<div class="_c5">
						<Icon name="chevron-up" />
						<span class="_c6">Chevron Up</span>
					</div>
					<div class="_c5">
						<Icon name="box" />
						<span class="_c6">Box</span>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c3 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c4 {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	._c5 {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	._c6 {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}
	._c7 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c8 {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 768px) {
		._c8 {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
