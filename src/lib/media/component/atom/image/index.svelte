<script lang="ts">
	import type { RecipeImage } from '$stylist/media/interface/recipe/image';
	import { createImageState } from '$stylist/media/function/state/image/index.svelte';

	let props: RecipeImage = $props();
	const state = createImageState(props);
</script>

<div class={state.containerClass}>
	{#if state.content && !state.isLoaded && !state.hasError}
		<div class={state.wrapperClass}>
			{@render state.content()}
		</div>
	{/if}

	<img
		{...state.restProps}
		src={state.imageSource}
		alt={props.alt ?? ''}
		loading={state.loadingProp}
		width={state.width}
		height={state.height}
		class="image__TODO-imageClasses"
		onerror={() => state.handleError()}
		onload={() => state.handleLoad()}
	/>
</div>

<style>
	.image__favicon-image {
		display: inline-block;
		border-radius: 0.125rem;
	}

	.image__favicon-fallback {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-background-secondary);
		color: var(--color-text-secondary);
		font-size: 0.75rem;
		line-height: 1rem;
	}
</style>
