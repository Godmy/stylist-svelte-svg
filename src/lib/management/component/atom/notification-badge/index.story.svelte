<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import NotificationBadge from './index.svelte';

	type Props = {
		count: number;
		maxCount: number;
		marker: 'dot' | 'number' | 'letter' | 'check' | 'x';
		appearance: 'danger' | 'primary' | 'secondary' | 'success' | 'warning' | 'info';
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'count',
			type: 'number',
			defaultValue: 3,
			min: 0,
			max: 100
		},
		{
			name: 'maxCount',
			type: 'number',
			defaultValue: 99,
			min: 1,
			max: 999
		},
		{
			name: 'marker',
			type: 'select',
			defaultValue: 'number',
			options: ['dot', 'number', 'letter', 'check', 'x']
		},
		{
			name: 'appearance',
			type: 'select',
			defaultValue: 'danger',
			options: ['danger', 'primary', 'secondary', 'success', 'warning', 'info']
		}
	];
</script>

<Story
	id="molecules-notification-badge"
	title="NotificationBadge"
	component={NotificationBadge}
	category="Molecules"
	description="A badge component to display notification counts."
	tags={['badge', 'count', 'notification']}
	{controls}
>
	{#snippet children(values: any)}
		{@const storyProps = values as Partial<Props>}
		{@const count = typeof storyProps.count === 'number' ? storyProps.count : 3}
		{@const maxCount = typeof storyProps.maxCount === 'number' ? storyProps.maxCount : 99}
		{@const marker = storyProps.marker ?? 'number'}
		{@const appearance = storyProps.appearance ?? 'danger'}
		<div class="_c1">
			<h2 class="_c2">Notification Badge</h2>
			<div class="_c3">
				<div class="_c4">
					<div class="_c5">Icon</div>
					<NotificationBadge {count} {maxCount} {marker} {appearance} />
				</div>

				<div class="_c4">
					<div class="_c6">Button</div>
					<NotificationBadge {count} {maxCount} marker="dot" appearance="danger" />
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c2 {
		margin-bottom: 1.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	._c3 > * + * {
		margin-left: 2rem;
	}
	._c4 {
		position: relative;
	}
	._c5 {
		display: flex;
		height: 2.5rem;
		width: 2.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background-color: var(--color-background-tertiary);
	}
	._c6 {
		display: flex;
		height: 3rem;
		width: 3rem;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		background-color: var(--color-background-tertiary);
	}
</style>
