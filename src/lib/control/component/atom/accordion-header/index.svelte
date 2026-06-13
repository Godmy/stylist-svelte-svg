<script lang="ts">
	import { getContext } from 'svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import { ACCORDION_HEADER_CONTEXT } from '$stylist/control/const/record/accordion-header-context';
	import createAccordionHeaderState from '$stylist/control/function/state/accordion-header/index.svelte';
	import type { AccordionHeaderProps } from '$stylist/control/type/struct/accordion-header-props';

	let props: AccordionHeaderProps = $props();

	// Svelte context can only be accessed in components, pass to state function
	const context =
		getContext<typeof ACCORDION_HEADER_CONTEXT>('accordion-context') ?? ACCORDION_HEADER_CONTEXT;
	const state = createAccordionHeaderState({
		...props,
		accordionContext: context
	});

	const restProps = $derived.by(() => {
		const {
			class: _class,
			value: _value,
			children: _children,
			paddingClass: _paddingClass,
			chevronSizeClass: _chevronSizeClass,
			...rest
		} = props;

		return rest;
	});
</script>

<button
	{...restProps}
	type="button"
	class="c-accordion-header"
	data-expanded={state.open ? '' : undefined}
	data-disabled={state.disabled ? '' : undefined}
	onclick={state.handleClick}
	aria-expanded={state.open}
>
	<span class="c-accordion-header__label">
		{#if props.children}{@render props.children()}{/if}
	</span>
	<span class="c-accordion-header__chevron">
		<BaseIcon name="chevron-down" style="width: 1.25rem; height: 1.25rem;" />
	</span>
</button>

<style>
	.c-accordion-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		font-weight: 500;
		text-align: left;
		padding: var(--spacing-md, 1rem);
		color: var(--color-text-primary);
		background: transparent;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: background var(--duration-200, 200ms)
			var(--animation-ease, cubic-bezier(0.4, 0, 0.2, 1));
	}

	.c-accordion-header:hover {
		background: var(--color-background-secondary);
	}

	.c-accordion-header:focus-visible {
		outline: none;
		box-shadow:
			0 0 0 2px var(--color-primary-500),
			0 0 0 4px transparent;
	}

	.c-accordion-header[data-expanded] {
		background: var(--color-background-secondary);
	}

	.c-accordion-header[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
		pointer-events: none;
	}

	.c-accordion-header__label {
		font-size: 0.875rem;
	}

	.c-accordion-header__chevron {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: transform var(--duration-200, 200ms)
			var(--animation-ease, cubic-bezier(0.4, 0, 0.2, 1));
	}

	.c-accordion-header[data-expanded] .c-accordion-header__chevron {
		transform: rotate(180deg);
	}
</style>
