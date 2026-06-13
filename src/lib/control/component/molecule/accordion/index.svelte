<script lang="ts">
	import { PresetAccordion } from '$stylist/control/const/preset/accordion';
	import { createAccordionState } from '$stylist/control/function/state/accordion/index.svelte';
	import type { RecipeAccordion } from '$stylist/control/interface/recipe/accordion';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';

	let props: RecipeAccordion = $props();
	const state = createAccordionState(props);

	let restProps = $derived.by(() => {
		const {
			items,
			multiple,
			class: className,
			itemClass,
			headerClass,
			contentClass,
			...rest
		} = props;
		return rest;
	});
</script>

<div class={['c-accordion', props.class].filter(Boolean).join(' ')} {...restProps}>
	{#each props.items as item}
		<div
			class={['c-accordion__item', props.itemClass].filter(Boolean).join(' ')}
			data-expanded={state.isExpanded(item.id) || undefined}
		>
			<h3 class="c-accordion__heading">
				<button
					type="button"
					class={['c-accordion__header', props.headerClass].filter(Boolean).join(' ')}
					data-expanded={state.isExpanded(item.id) || undefined}
					data-disabled={item.disabled || undefined}
					onclick={() => !item.disabled && state.toggleAccordion(item.id)}
					aria-expanded={state.isExpanded(item.id)}
					aria-controls={`panel-${item.id}`}
				>
					<span>{item.title}</span>
					<BaseIcon
						name={PresetAccordion.ChevronDown}
						style="width:1rem;height:1rem;"
						class="c-accordion__chevron"
						aria-hidden="true"
					/>
				</button>
			</h3>

			<div
				id={`panel-${item.id}`}
				role="region"
				aria-labelledby={`accordion-header-${item.id}`}
				class="c-accordion__panel"
				data-expanded={state.isExpanded(item.id) || undefined}
			>
				<div class={['c-accordion__content', props.contentClass].filter(Boolean).join(' ')}>
					{#if typeof item.content === 'function'}
						{@html item.content()}
					{:else}
						{@html item.content}
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.c-accordion {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		overflow: hidden;
	}

	.c-accordion__item {
		border-bottom: 1px solid var(--color-border-primary);
	}

	.c-accordion__item:last-child {
		border-bottom: none;
	}

	.c-accordion__heading {
		margin: 0;
	}

	.c-accordion__header {
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

	.c-accordion__header:hover {
		background: var(--color-background-secondary);
	}

	.c-accordion__header[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		pointer-events: none;
		cursor: not-allowed;
	}

	.c-accordion__header[data-expanded] {
		background: var(--color-primary-50);
		color: var(--color-primary-700);
	}

	.c-accordion__chevron {
		flex-shrink: 0;
		transition: transform var(--duration-200, 200ms);
	}

	[data-expanded] .c-accordion__chevron {
		transform: rotate(180deg);
	}

	.c-accordion__panel {
		max-height: 0;
		overflow: hidden;
		transition: max-height var(--duration-200, 200ms) ease;
	}

	.c-accordion__panel[data-expanded] {
		max-height: 1000px;
	}

	.c-accordion__content {
		padding: 1rem;
		border-top: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
	}
</style>
