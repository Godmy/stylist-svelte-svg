<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenRangeControlProps } from '$stylist/control/type/struct/token-range-control-props';
	import createTokenRangeState from '$stylist/control/function/state/token-range/index.svelte';

	let props: TokenRangeControlProps = $props();
	const state = createTokenRangeState(props);
</script>

<TokenControlBase definition={state.definition} layout="inline">
	<div class="c-token-range">
		<input
			class="c-token-range__input"
			type="range"
			min={state.definition.min}
			max={state.definition.max}
			step={state.definition.step ?? 1}
			value={state.internalValue}
			oninput={state.handleInput}
		/>
		<span class="c-token-range__value">{state.internalValue}</span>
	</div>
</TokenControlBase>

<style>
	.c-token-range {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 0.5rem;
		align-items: center;
		min-width: 220px;
	}

	.c-token-range__value {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary);
		min-width: 2rem;
		text-align: right;
	}

	.c-token-range__input {
		appearance: none;
		width: 100%;
		height: 0.25rem;
		border-radius: 0.125rem;
		background: var(--color-border-primary);
		cursor: pointer;
	}

	.c-token-range__input::-webkit-slider-thumb {
		appearance: none;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: var(--color-primary-600);
		cursor: pointer;
	}

	.c-token-range__input::-moz-range-thumb {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: var(--color-primary-600);
		cursor: pointer;
		border: none;
	}
</style>
