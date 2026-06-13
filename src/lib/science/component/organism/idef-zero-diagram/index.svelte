<script lang="ts">
	import type { Idef0DiagramProps } from '$stylist/science/type/struct/idef-zero/idef0diagram-props';
	import createIdef0DiagramState from '$stylist/science/function/state/idef0/index.svelte';
	import Idef0BlackBox from '$stylist/science/component/molecule/idef-zero-black-box/index.svelte';

	let props: Idef0DiagramProps = $props();
	const state = createIdef0DiagramState(props);
</script>

<section class={state.containerClasses}>
	{#if props.title}
		<h3 class="idef0-diagram__title">{props.title}</h3>
	{/if}
	<svg
		class={state.svgClasses}
		width={state.width}
		height={state.height}
		role="img"
		aria-label={props.model.title}
	>
		<Idef0BlackBox
			title={props.model.title}
			subtitle={props.model.subtitle}
			inputs={props.model.inputs}
			outputs={props.model.outputs}
			width={state.width}
			height={state.height}
		/>
	</svg>
</section>

<style>
	:global(.idef0-diagram) {
		display: inline-flex;
		flex-direction: column;
		gap: 0.75rem;
		border-radius: 0.75rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.75rem;
	}

	:global(.idef0-diagram__title) {
		font-size: 0.875rem;
		font-weight: var(--font-weight-semibold, 600);
		color: var(--color-text-primary);
	}

	:global(.idef0-diagram__svg) {
		display: block;
		overflow: visible;
	}
</style>
