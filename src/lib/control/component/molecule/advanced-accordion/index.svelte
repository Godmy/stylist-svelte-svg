<script lang="ts">
	import { PresetAdvancedAccordion } from '$stylist/control/const/preset/advanced-accordion';
	import { createAdvancedAccordionState } from '$stylist/control/function/state/advanced-accordion/index.svelte';
	import type { RecipeAdvancedAccordion } from '$stylist/control/interface/recipe/advanced-accordion';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';

	let props: RecipeAdvancedAccordion = $props();
	const state = createAdvancedAccordionState(props);

	let items = $derived(props.items ?? []);
	let restProps = $derived.by(() => {
		const { items: itemList, class: className, ...rest } = props;
		return rest;
	});
</script>

<div class={['c-advanced-accordion', props.class].filter(Boolean).join(' ')} {...restProps}>
	{#each items as item, i}
		<div class="c-advanced-accordion__item" data-expanded={state.activeIndex === i || undefined}>
			<button
				type="button"
				class="c-advanced-accordion__header"
				data-expanded={state.activeIndex === i || undefined}
				onclick={() => state.setActiveIndex(i)}
			>
				<span>{item.title}</span>
				<BaseIcon
					name={PresetAdvancedAccordion.ChevronDown}
					class="c-advanced-accordion__chevron"
					style="width:1.25rem;height:1.25rem;"
					aria-hidden="true"
				/>
			</button>
			{#if state.activeIndex === i}
				<div class="c-advanced-accordion__panel">
					{@render item.content()}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.c-advanced-accordion {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		overflow: hidden;
	}

	.c-advanced-accordion__item {
		border-bottom: 1px solid var(--color-border-primary);
	}

	.c-advanced-accordion__item:last-child {
		border-bottom: none;
	}

	.c-advanced-accordion__header {
		width: 100%;
		text-align: left;
		padding: 1rem;
		font-weight: 500;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		border: none;
		transition: background-color var(--duration-120, 120ms);
	}

	.c-advanced-accordion__header:hover {
		background: var(--color-background-secondary);
	}

	.c-advanced-accordion__header[data-expanded] {
		background: var(--color-primary-50);
		color: var(--color-primary-700);
	}

	.c-advanced-accordion__chevron {
		transition: transform var(--duration-200, 200ms);
		flex-shrink: 0;
	}

	.c-advanced-accordion__header[data-expanded] .c-advanced-accordion__chevron {
		transform: rotate(180deg);
	}

	.c-advanced-accordion__panel {
		padding: 1rem;
		border-top: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
	}
</style>
