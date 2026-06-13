<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	const ChevronDown = 'chevron-down';

	import createAccordionHeaderDoubleState from '$stylist/control/function/state/accordion-header-double/index.svelte';
	import type { AccordionHeaderDoubleProps } from '$stylist/control/type/struct/accordion-header-double-props';

	let props: AccordionHeaderDoubleProps = $props();

	const state = createAccordionHeaderDoubleState(props);

	function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		if (!state.disabled && props.onclick) {
			props.onclick(event);
		}
	}

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				value: _value,
				children: _children,
				open: _open,
				disabled: _disabled,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<button
	{...restProps}
	type="button"
	class="c-accordion-header-double"
	data-expanded={state.open ? '' : undefined}
	data-disabled={state.disabled ? '' : undefined}
	onclick={handleClick}
	aria-expanded={state.open}
	aria-disabled={state.disabled}
>
	{#if props.children}{@render props.children()}{/if}
	<span class="c-accordion-header-double__chevron">
		<BaseIcon name={ChevronDown} style="width: 1.25rem; height: 1.25rem;" />
	</span>
</button>

<style>
	.c-accordion-header-double {
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

	.c-accordion-header-double:hover {
		background: var(--color-background-secondary);
	}

	.c-accordion-header-double:focus-visible {
		outline: none;
		box-shadow:
			0 0 0 2px var(--color-primary-500),
			0 0 0 4px transparent;
	}

	.c-accordion-header-double[data-expanded] {
		background: var(--color-background-secondary);
	}

	.c-accordion-header-double[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
		pointer-events: none;
	}

	.c-accordion-header-double__chevron {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: transform var(--duration-200, 200ms)
			var(--animation-ease, cubic-bezier(0.4, 0, 0.2, 1));
	}

	.c-accordion-header-double[data-expanded] .c-accordion-header-double__chevron {
		transform: rotate(180deg);
	}
</style>
