<script lang="ts">
	import createFlagState from '$stylist/svg/component/atom/flag/state.svelte';
	import Svg from '$stylist/svg/component/atom/svg/index.svelte';
	import type { RecipeFlag } from '$stylist/svg/interface/recipe/flag';

	let props: RecipeFlag = $props();
	const state = createFlagState(() => props);
</script>

<span class={state.rootClass} {...state.restProps}>
	{#if state.isLoading}
		<span class="flag__skeleton" aria-hidden="true"></span>
	{:else if state.svg}
		<Svg
			svg={state.svg}
			size={state.size}
			aria-label={state.fallback ? `${state.fallback} flag` : 'Flag'}
		/>
	{:else}
		<span class="flag__fallback">{state.fallback}</span>
	{/if}
</span>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer svg {
		:global {
			:where(.flag) {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				line-height: 1;
			}
			:where(.flag svg) {
				border-radius: var(--radius-0-5, 0.125rem);
				box-shadow: inset 0 0 0 var(--border-width-thin, 1px)
					color-mix(in srgb, var(--color-text-primary, black) 12%, transparent);
				overflow: hidden;
			}
			/* Text fallback scales with the surrounding text, like the icon containers. */
			:where(.flag__fallback) {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				min-width: 2em;
				height: 2em;
				padding-inline: var(--space-1, 0.25rem);
				border-radius: var(--radius-full, 9999px);
				background: var(--color-background-tertiary);
				color: var(--color-text-primary);
				font-size: var(--font-size-3, 0.75rem);
				font-weight: var(--font-weight-semibold, 600);
			}
			:where(.flag__skeleton) {
				display: inline-block;
				width: var(--space-6, 1.5rem);
				height: var(--space-6, 1.5rem);
				border-radius: var(--radius-0-5, 0.125rem);
				background: linear-gradient(
					90deg,
					var(--color-background-secondary, rgb(229 231 235)) 25%,
					var(--color-background-tertiary, rgb(209 213 219)) 50%,
					var(--color-background-secondary, rgb(229 231 235)) 75%
				);
				background-size: 200% 100%;
				animation: flag-skeleton-shimmer var(--duration-1200, 1.2s)
					var(--easing-ease-in-out, ease-in-out) infinite;
			}
			@keyframes flag-skeleton-shimmer {
				0% {
					background-position: 200% 0;
				}
				100% {
					background-position: -200% 0;
				}
			}
		}
	}
</style>
