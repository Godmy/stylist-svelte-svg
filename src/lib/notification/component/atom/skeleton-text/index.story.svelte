<script lang="ts">
	import SkeletonText from './index.svelte';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	let lines = $state(3);
	let width = $state(80);
	let animate = $state(true);

	const controls: InterfaceControllerSettings[] = [
		{ name: 'lines', type: 'number', min: 1, max: 6, step: 1, defaultValue: 3 },
		{ name: 'width', type: 'number', min: 30, max: 100, step: 5, defaultValue: 80 },
		{ name: 'animate', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={SkeletonText} {controls}>
	<div class="_c1">
		{#each Array.from({ length: lines }) as _, index}
			<SkeletonText
				width={`${Math.max(40, width - index * 8)}%`}
				class={animate ? '' : 'story-no-anim'}
			/>
		{/each}

		<div class="_c2">
			<label class="_c3">
				Lines ({lines})
				<input type="range" min="1" max="6" step="1" bind:value={lines} />
			</label>
			<label class="_c3">
				Base width ({width}%)
				<input type="range" min="30" max="100" step="5" bind:value={width} />
			</label>
			<label class="_c4">
				<input type="checkbox" bind:checked={animate} />
				Animate pulse
			</label>
		</div>
	</div>
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 1rem;
	}
	._c2 {
		display: grid;
		gap: 0.75rem;
	}
	@media (min-width: 768px) {
		._c2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c3 {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c4 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.story-no-anim {
		animation: none !important;
	}
</style>
