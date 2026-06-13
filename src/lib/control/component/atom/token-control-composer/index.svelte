<script lang="ts">
	import TokenRadioControl from '$stylist/control/component/atom/token-radio/index.svelte';
	import TokenRangeControl from '$stylist/control/component/atom/token-range/index.svelte';
	import TokenSelectControl from '$stylist/control/component/atom/token-select/index.svelte';
	import TokenTextControl from '$stylist/control/component/atom/token-text/index.svelte';
	import type { TokenControlComposerProps } from '$stylist/control/type/struct/token-control-composer-props';
	import createTokenControlComposerState from '$stylist/control/function/state/token-control-composer/index.svelte';

	let props: TokenControlComposerProps = $props();
	const state = createTokenControlComposerState(props);
</script>

<div class="c-token-composer">
	<div class="c-token-composer__control">
		{#if state.controlKind === 'radio'}
			<TokenRadioControl
				definition={state.definition as any}
				value={state.value}
				onChange={state.onChange}
			/>
		{:else if state.controlKind === 'select'}
			<TokenSelectControl
				definition={state.definition as any}
				value={state.value}
				onChange={state.onChange}
			/>
		{:else if state.controlKind === 'range'}
			<TokenRangeControl
				definition={state.definition as any}
				value={state.rangeValue}
				onChange={(next) => state.onChange?.(next)}
			/>
		{:else}
			<TokenTextControl
				definition={state.definition as any}
				value={state.textValue}
				onChange={(next) => state.onChange?.(next)}
			/>
		{/if}
	</div>
</div>

<style>
	.c-token-composer {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.c-token-composer__label {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-secondary);
		text-transform: uppercase;
		white-space: nowrap;
		min-width: 4rem;
	}

	.c-token-composer__control {
		flex: 1;
	}
</style>
