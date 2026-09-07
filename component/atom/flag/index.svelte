<script lang="ts">
	import createFlagState from './state.svelte';
	import Svg from '$stylist/svg/component/atom/svg/index.svelte';
	import type { RecipeFlag } from '$stylist/svg/interface/recipe/flag';

	let props: RecipeFlag = $props();
	const state = createFlagState(props);
</script>

<span class={state.rootClass} {...state.restProps}>
	{#if state.isLoading}
		<span class="flag__skeleton" aria-hidden="true"></span>
	{:else if state.svg}
		<Svg svg={state.svg} size={state.size} aria-label={state.fallback ? `${state.fallback} flag` : 'Flag'} />
	{:else}
		<span class="flag__fallback">{state.fallback}</span>
	{/if}
</span>

<style>
	.flag {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
	}

	.flag :global(svg) {
		border-radius: 0.125rem;
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.12);
		overflow: hidden;
	}

	.flag__fallback {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 1.5rem;
		height: 1.5rem;
		border-radius: 9999px;
		background: var(--color-background-tertiary);
		color: var(--color-text-primary);
		font-size: 0.75rem;
		font-weight: 600;
	}

	.flag__skeleton {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 0.125rem;
		background: linear-gradient(
			90deg,
			var(--color-background-secondary, rgb(229 231 235)) 25%,
			var(--color-background-tertiary, rgb(209 213 219)) 50%,
			var(--color-background-secondary, rgb(229 231 235)) 75%
		);
		background-size: 200% 100%;
		animation: flag-skeleton-shimmer 1.2s ease-in-out infinite;
	}

	@keyframes flag-skeleton-shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
</style>
