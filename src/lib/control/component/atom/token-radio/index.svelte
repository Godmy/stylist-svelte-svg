<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenRadioControlProps } from '$stylist/control/type/struct/token-radio-control-props';
	import createTokenRadioState from '$stylist/control/function/state/token-radio/index.svelte';

	let props: TokenRadioControlProps = $props();
	const state = createTokenRadioState(props);
</script>

<TokenControlBase definition={state.definition} layout="inline">
	<div class="c-token-radio">
		{#each state.definition.options as option}
			<button
				type="button"
				class="c-token-radio__chip"
				data-active={state.internalValue === option.value || undefined}
				onclick={() => state.selectOption(option.value)}
			>
				{option.label}
			</button>
		{/each}
	</div>
</TokenControlBase>

<style>
	.c-token-radio {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}

	.c-token-radio__chip {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		padding: 0.375rem 0.625rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		cursor: pointer;
		font-size: 0.875rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		transition: border-color var(--duration-120, 120ms);
	}

	.c-token-radio__chip:hover:not([data-disabled]) {
		border-color: var(--color-primary-500);
	}

	.c-token-radio__chip[data-active] {
		border-color: var(--color-primary-500);
		background: color-mix(
			in srgb,
			var(--color-primary-500) 18%,
			var(--color-background-primary) 82%
		);
		color: var(--color-primary-600);
	}

	.c-token-radio__chip[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
	}
</style>
