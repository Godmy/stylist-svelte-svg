<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import AnimatedProgress from './index.svelte';

	type Props = {
		value?: number;
		min?: number;
		max?: number;
		label?: string;
		showPercentage?: boolean;
		class?: string;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'value',
			type: 'number',
			defaultValue: 50,
			min: 0,
			max: 100
		},
		{
			name: 'min',
			type: 'number',
			defaultValue: 0
		},
		{
			name: 'max',
			type: 'number',
			defaultValue: 100
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Progress'
		},
		{
			name: 'showPercentage',
			type: 'boolean',
			defaultValue: true
		}
	];
</script>

<Story
	id="molecules-animated-progress"
	title="AnimatedProgress"
	component={AnimatedProgress}
	category="Molecules"
	description="A progress bar component with animated value display."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<h2 class="_c2">AnimatedProgress Story</h2>
			<AnimatedProgress {...values} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}
</style>
