<script lang="ts">
	import type { RecipeCountryFlag } from '$stylist/media/interface/recipe/country-flag';
	import { createCountryFlagState } from '$stylist/media/function/state/country-flag/index.svelte';

	let props: RecipeCountryFlag = $props();
	const state = createCountryFlagState(props);
</script>

{#if state.isValid}
	<span class={state.classes} style={state.style} {...state.restProps}>
		{state.emoji}
	</span>
{:else}
	<div class={state.fallbackClasses} style={state.fallbackStyle}>
		{#if props.content}
			{props.content}
		{:else}
			?
		{/if}
	</div>
{/if}
