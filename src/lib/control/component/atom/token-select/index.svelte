<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenSelectControlProps } from '$stylist/control/type/struct/token-select-control-props';
	import createTokenSelectState from '$stylist/control/function/state/token-select/index.svelte';

	let props: TokenSelectControlProps = $props();
	const state = createTokenSelectState(props);
</script>

<TokenControlBase definition={state.definition} layout="inline">
	<select class="c-token-select__input" value={state.internalIndex} onchange={state.handleChange}>
		{#each state.definition.options as option, index}
			<option value={index}>{option.label}</option>
		{/each}
	</select>
</TokenControlBase>

<style>
	.c-token-select__input {
		padding: 0.375rem 0.5rem;
		font-size: 0.875rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		cursor: pointer;
	}

	.c-token-select__input:focus {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
	}

	.c-token-select__input[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
	}
</style>
