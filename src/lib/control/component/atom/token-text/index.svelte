<script lang="ts">
	import createTokenTextState from '$stylist/control/function/state/token-text/index.svelte';
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenTextControlProps } from '$stylist/control/type/struct/token-text-control-props';

	let props: TokenTextControlProps = $props();
	const state = createTokenTextState(props);
</script>

<TokenControlBase definition={state.definition} layout="inline">
	<input
		class="c-token-text__input"
		type="text"
		value={state.value}
		placeholder={state.placeholder}
		oninput={state.handleInput}
	/>
</TokenControlBase>

<style>
	.c-token-text__input {
		padding: 0.375rem 0.5rem;
		font-size: 0.875rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		min-width: 220px;
	}

	.c-token-text__input:focus {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
	}
</style>
