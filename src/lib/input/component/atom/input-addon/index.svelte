<script lang="ts">
	import type { SlotInputAddon as IInputAddonProps } from '$stylist/input/interface/slot/input-addon';
	import createInputAddonState from '$stylist/input/function/state/input-addon/index.svelte';

	let props: IInputAddonProps & { position?: 'left' | 'right' } = $props();
	const state = createInputAddonState({
		variant: props.variant,
		size: 'md',
		class: props.class
	});
	const classes = $derived(
		[
			state.classes,
			(props.position ?? 'left') === 'left' ? 'input-addon--left' : 'input-addon--right'
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes}>
	{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
</div>

<style>
	.input-addon--left {
		border-start-start-radius: var(--border-radius-base, 0.375rem);
		border-end-start-radius: var(--border-radius-base, 0.375rem);
		border-start-end-radius: 0;
		border-end-end-radius: 0;
		border-inline-end-color: transparent;
	}

	.input-addon--right {
		border-start-start-radius: 0;
		border-end-start-radius: 0;
		border-start-end-radius: var(--border-radius-base, 0.375rem);
		border-end-end-radius: var(--border-radius-base, 0.375rem);
		border-inline-start-color: transparent;
	}
</style>
