<script lang="ts">
	import SkeletonRectangle from './index.svelte';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	let width = $state(180);
	let height = $state(32);
	let animate = $state(true);

	const controls: InterfaceControllerSettings[] = [
		{ name: 'width', type: 'number', min: 60, max: 400, step: 10, defaultValue: 180 },
		{ name: 'height', type: 'number', min: 12, max: 120, step: 4, defaultValue: 32 },
		{ name: 'animate', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={SkeletonRectangle} {controls}>
	{#snippet children()}
		{@const widthValue = `${Math.round(width)}px`}
		{@const heightValue = `${Math.round(height)}px`}
		{@const compactWidthValue = `${Math.round(width * 0.6)}px`}
		{@const tallWidthValue = `${Math.round(width * 0.9)}px`}
		{@const tallHeightValue = `${Math.round(height * 2)}px`}
		<div class="_c1">
			<div class="_c2">
				<SkeletonRectangle
					{...{
						width: widthValue,
						height: heightValue,
						class: animate ? '' : '!animate-none'
					} as any}
				/>
				<SkeletonRectangle
					{...{
						width: compactWidthValue,
						height: heightValue,
						class: 'opacity-[var(--opacity-80)]'
					} as any}
				/>
				<SkeletonRectangle
					{...{
						width: tallWidthValue,
						height: tallHeightValue,
						class: 'opacity-[var(--opacity-90)]'
					} as any}
				/>
			</div>

			<div class="_c3">
				<label class="_c4">
					Width ({Math.round(width)}px)
					<input type="range" min="60" max="400" step="10" bind:value={width} />
				</label>
				<label class="_c4">
					Height ({Math.round(height)}px)
					<input type="range" min="12" max="120" step="4" bind:value={height} />
				</label>
				<label class="_c5">
					<input type="checkbox" bind:checked={animate} />
					Animate pulse
				</label>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 1.5rem;
	}
	._c2 {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	._c3 {
		display: grid;
		gap: 1rem;
	}
	@media (min-width: 640px) {
		._c3 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c4 {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c5 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
