<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import createIconState from './state.svelte';
	import type { RecipeIcon } from '$stylist/svg/interface/recipe/icon';
	import Svg from '$stylist/svg/component/atom/svg/index.svelte';

	let props: RecipeIcon & Omit<HTMLAttributes<HTMLSpanElement>, 'class'> = $props();
	const state = createIconState(props);
</script>

{#snippet glyph()}
	{#if state.isLoading}
		<span
			class="icon__skeleton {state.iconClasses}"
			style:width={state.numericSize ? `${state.numericSize}px` : undefined}
			style:height={state.numericSize ? `${state.numericSize}px` : undefined}
			aria-hidden="true"
		></span>
	{:else}
		<Svg
			svg={state.localSvg}
			class={state.iconClasses}
			size={state.numericSize}
			strokeWidth={state.strokeWidth}
			aria-label={state.ariaLabel}
		/>
	{/if}
{/snippet}

{#if state.container === 'none'}
	<span class="icon-wrap" {...state.restProps}>
		{@render glyph()}
	</span>
{:else}
	<span class={state.containerClasses} {...state.restProps}>
		<span class="icon-wrap">
			{@render glyph()}
		</span>
	</span>
{/if}

<style>
	.icon-wrap {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: currentColor;
		line-height: 0;
	}

	.icon__icon-wrapper,
	.icon__icon-circle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: currentColor;
		line-height: 0;
	}

	.icon__icon-wrapper {
		width: 2rem;
		height: 2rem;
		border: 1px solid var(--color-border-primary, rgb(209 213 219));
		border-radius: 0.375rem;
		background: var(--color-background-secondary, rgb(249 250 251));
	}

	.icon__icon-circle {
		width: 2rem;
		height: 2rem;
		border: 1px solid var(--color-border-primary, rgb(209 213 219));
		border-radius: 999px;
		background: var(--color-background-primary, rgb(255 255 255));
	}

	.icon__icon-circle--xs {
		width: 1.25rem;
		height: 1.25rem;
	}

	.icon__icon-circle--sm {
		width: 1.5rem;
		height: 1.5rem;
	}

	.icon__icon-circle--md {
		width: 2rem;
		height: 2rem;
	}

	.icon__icon-circle--lg {
		width: 2.5rem;
		height: 2.5rem;
	}

	.icon__icon-circle--xl {
		width: 3rem;
		height: 3rem;
	}

	.icon__icon-circle--2xl {
		width: 3.5rem;
		height: 3.5rem;
	}

	.icon__icon-circle--filled {
		border-color: var(--color-text-primary, rgb(17 24 39));
		background: var(--color-text-primary, rgb(17 24 39));
		color: var(--color-background-primary, rgb(255 255 255));
	}

	.icon__icon-circle--disabled {
		opacity: 0.45;
	}

	.icon__skeleton {
		display: inline-block;
		width: 1em;
		height: 1em;
		border-radius: 3px;
		background: linear-gradient(
			90deg,
			var(--color-background-secondary, rgb(229 231 235)) 25%,
			var(--color-background-tertiary, rgb(209 213 219)) 50%,
			var(--color-background-secondary, rgb(229 231 235)) 75%
		);
		background-size: 200% 100%;
		animation: icon-skeleton-shimmer 1.2s ease-in-out infinite;
	}

	@keyframes icon-skeleton-shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
</style>
