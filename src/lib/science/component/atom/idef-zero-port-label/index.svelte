<script lang="ts">
	import type { RecipeIdef0PortLabel as Idef0PortLabelProps } from '$stylist/science/interface/recipe/idef0-port-label';
	import createIdef0PortLabelState from '$stylist/science/function/state/idef0-port-label/index.svelte';

	let props: Idef0PortLabelProps = $props();
	const state = createIdef0PortLabelState(props);
</script>

<text
	class={state.classes}
	x={props.x}
	y={props.y}
	text-anchor={props.anchor ?? 'middle'}
	fill={props.color ?? 'var(--color-text-secondary)'}
>
	{props.text}
</text>

<style>
	:global(.idef0-port-label) {
		fill: var(--color-text-secondary);
		font-size: 0.75rem;
		font-weight: var(--font-weight-medium, 500);
	}
</style>
