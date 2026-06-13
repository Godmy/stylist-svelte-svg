<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Container from './index.svelte';

	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'size',
			type: 'select',
			options: ['sm', 'md', 'lg', 'xl', 'full'],
			defaultValue: 'full'
		}
	];
</script>

<Story
	{controls}
	component={Container}
	title="Container Component"
	description="A responsive container with max-width constraints"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Container {...values}>
				{#snippet children()}
					<div class="_c2">
						Container size: <strong>{values.size}</strong>
					</div>
				{/snippet}
			</Container>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		width: 100%;
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	._c2 {
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
		text-align: center;
	}
</style>
