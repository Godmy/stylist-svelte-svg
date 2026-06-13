<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Badge from './index.svelte';

	const variantOptions = ['default', 'success', 'warning', 'danger', 'info'] as const;
	const sizeOptions = ['sm', 'md', 'lg'] as const;

	type BadgeStoryProps = {
		label: string;
		variant: (typeof variantOptions)[number];
		size: (typeof sizeOptions)[number];
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'New' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: [...variantOptions] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: [...sizeOptions] }
	];
</script>

<Story
	id="atoms-badge"
	title="Badge"
	component={Badge}
	category="Atoms"
	description="Pill-shaped badge for quick status indicators."
	tags={['status', 'label']}
	{controls}
>
	{#snippet children(values: any)}
		{#snippet badgeLabel()}
			{(values as BadgeStoryProps).label || 'New'}
		{/snippet}

		<div class="_c1">
			<Badge variant={(values as BadgeStoryProps).variant} size={(values as BadgeStoryProps).size}>
				{@render badgeLabel()}
			</Badge>

			<div class="_c2">
				<p>Variants demonstrate different semantic contexts.</p>
				<p>Use size to match surrounding typography.</p>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	._c2 {
		display: grid;
		gap: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
