<script lang="ts">
	import { getContext } from 'svelte';
	import { ACCORDION_PANEL_CONTEXT } from '$stylist/control/const/record/accordion-panel-context';
	import createAccordionPanelState from '$stylist/control/function/state/accordion-panel/index.svelte';
	import type { AccordionPanelProps } from '$stylist/control/type/struct/accordion-panel-props';

	let props: AccordionPanelProps = $props();

	// Svelte context can only be accessed in components, pass to state function
	const context =
		getContext<typeof ACCORDION_PANEL_CONTEXT>('accordion-context') ?? ACCORDION_PANEL_CONTEXT;
	const state = createAccordionPanelState({
		...props,
		accordionContext: context
	});

	const content = $derived(props.content);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				value: _value,
				content: _content,
				children: _children,
				paddingClass: _paddingClass,
				borderClass: _borderClass,
				bgClass: _bgClass,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div
	{...restProps}
	class="c-accordion-panel"
	data-expanded={state.isOpen ? '' : undefined}
	aria-hidden={!state.isOpen}
>
	<div class="c-accordion-panel__content">
		{#if state.content}
			{@render state.content()}
		{:else if children}
			{#if children}{@render children()}{/if}
		{/if}
	</div>
</div>

<style>
	.c-accordion-panel {
		overflow: hidden;
		max-height: 0;
		opacity: 0;
		transition:
			max-height var(--duration-200, 200ms) var(--animation-ease, cubic-bezier(0.4, 0, 0.2, 1)),
			opacity var(--duration-200, 200ms) var(--animation-ease, cubic-bezier(0.4, 0, 0.2, 1));
	}

	.c-accordion-panel[data-expanded] {
		max-height: 24rem;
		opacity: 1;
	}

	.c-accordion-panel__content {
		padding: var(--spacing-md, 1rem);
		border-top: 1px solid var(--color-border-primary);
		color: var(--color-text-secondary);
		font-size: 0.875rem;
	}
</style>
