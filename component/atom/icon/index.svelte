<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import createIconState from '$stylist/svg/component/atom/icon/state.svelte';
	import type { RecipeIcon } from '$stylist/svg/interface/recipe/icon';
	import Svg from '$stylist/svg/component/atom/svg/index.svelte';

	let props: RecipeIcon & Omit<HTMLAttributes<HTMLSpanElement>, 'class'> = $props();
	const state = createIconState(() => props);
</script>

{#snippet glyph()}
	{#if state.isLoading}
		<span
			class="icon__skeleton {state.iconClasses}"
			style:width="{state.pixelSize}px"
			style:height="{state.pixelSize}px"
			aria-hidden="true"
		></span>
	{:else}
		<Svg
			svg={state.localSvg}
			class={state.iconClasses}
			size={state.pixelSize}
			strokeWidth={state.strokeWidth}
			aria-label={state.ariaLabel}
		/>
	{/if}
{/snippet}

{#if state.container === 'none'}
	<span
		class={['icon-wrap', state.toneClass, state.className]}
		style:color={state.iconColor}
		{...state.restProps}
	>
		{@render glyph()}
	</span>
{:else}
	<span class={[state.containerClasses, state.shapeClass]} {...state.restProps}>
		<span class={['icon-wrap', state.toneClass, state.className]} style:color={state.iconColor}>
			{@render glyph()}
		</span>
	</span>
{/if}

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer svg {
		:global {
			/* The glyph paints with currentColor; containers size in em so they follow the text. */
			:where(.icon-wrap, .icon__icon-wrapper, .icon__icon-circle) {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				color: currentColor;
				line-height: 0;
			}
			:where(.icon-wrap) {
				color: var(--icon-color, var(--color-icon-primary, currentColor));
			}
			:where(.icon__icon-wrapper, .icon__icon-circle) {
				width: var(--space-8, 2rem);
				height: var(--space-8, 2rem);
				border: var(--border-width-thin, 1px) solid var(--color-border-primary, rgb(209 213 219));
			}
			:where(.icon__icon-wrapper) {
				border-radius: var(--radius-1-5, 0.375rem);
				background: var(--color-background-secondary, rgb(249 250 251));
			}
			:where(.icon__icon-circle) {
				border-radius: var(--radius-full, 9999px);
				background: var(--color-background-primary, rgb(255 255 255));
			}
			:where(.icon__icon-circle--xs) {
				width: var(--space-5, 1.25rem);
				height: var(--space-5, 1.25rem);
			}
			:where(.icon__icon-circle--sm) {
				width: var(--space-6, 1.5rem);
				height: var(--space-6, 1.5rem);
			}
			:where(.icon__icon-circle--md) {
				width: var(--space-8, 2rem);
				height: var(--space-8, 2rem);
			}
			:where(.icon__icon-circle--lg) {
				width: var(--space-10, 2.5rem);
				height: var(--space-10, 2.5rem);
			}
			:where(.icon__icon-circle--xl) {
				width: var(--space-12, 3rem);
				height: var(--space-12, 3rem);
			}
			:where(.icon__icon-circle--2xl) {
				width: var(--space-14, 3.5rem);
				height: var(--space-14, 3.5rem);
			}
			:where(.icon__icon-circle--filled) {
				--icon-color: var(--color-background-primary, rgb(255 255 255));
				border-color: var(--color-text-primary, rgb(17 24 39));
				background: var(--color-text-primary, rgb(17 24 39));
				color: var(--color-background-primary, rgb(255 255 255));
			}
			:where(.icon__icon-circle--disabled) {
				opacity: var(--opacity-50, 0.5);
			}
			:where(.icon--shape-circle) {
				border-radius: var(--radius-full, 9999px);
			}
			:where(.icon--shape-rounded) {
				border-radius: var(--radius-1-5, 0.375rem);
			}
			:where(.icon--shape-square) {
				border-radius: 0;
			}
			:where(.icon--shape-none) {
				border-color: transparent;
				background: transparent;
			}
			:where(.icon--tone-neutral, .icon--tone-secondary) {
				color: var(--color-text-secondary);
			}
			:where(.icon--tone-tertiary) {
				color: var(--color-text-tertiary);
			}
			:where(.icon--tone-primary) {
				color: var(--color-primary-600, currentColor);
			}
			:where(.icon--tone-success) {
				color: var(--color-success-600, currentColor);
			}
			:where(.icon--tone-info) {
				color: var(--color-info-600, currentColor);
			}
			:where(.icon--tone-warning) {
				color: var(--color-warning-600, currentColor);
			}
			:where(.icon--tone-danger) {
				color: var(--color-danger-600, currentColor);
			}
			:where(.icon--tone-error) {
				color: var(--color-error-600, currentColor);
			}
			:where(.icon__skeleton) {
				display: inline-block;
				width: 1em;
				height: 1em;
				border-radius: var(--radius-0-5, 0.125rem);
				background: linear-gradient(
					90deg,
					var(--color-background-secondary, rgb(229 231 235)) 25%,
					var(--color-background-tertiary, rgb(209 213 219)) 50%,
					var(--color-background-secondary, rgb(229 231 235)) 75%
				);
				background-size: 200% 100%;
				animation: icon-skeleton-shimmer var(--duration-1200, 1.2s)
					var(--easing-ease-in-out, ease-in-out) infinite;
			}
			@keyframes icon-skeleton-shimmer {
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
