<script lang="ts">
	import type { RecipeFeatureToggle } from '$stylist/management/interface/recipe/feature-toggle';

	import { createFeatureToggleState } from '$stylist/management/function/state/feature-toggle/index.svelte';

	let props: RecipeFeatureToggle = $props();

	const state = createFeatureToggleState(props);
</script>

ï»¿
<div class="feature-toggle__TODO-containerClasses" {...state.restProps}>
	<div class="_c1">
		<div>
			<div class="_c2">{state.label}</div>

			<div class="_c3">{state.description}</div>
		</div>

		<button
			type="button"
			aria-label={state.label}
			class={`${state.isChecked ? 'ft-track--on' : 'ft-track--off'} ${state.disabled ? 'cursor-not-allowed opacity-[var(--opacity-50)]' : ''} _c1`}
			disabled={state.disabled}
			onclick={state.handleChange}
		>
			<span class={`${state.isChecked ? 'left-6' : 'left-1'} _c2`}></span>
		</button>
	</div>
</div>

<style>
	._c1 {
		display: flex;

		align-items: flex-start;

		justify-content: space-between;

		gap: 1rem;
	}

	._c2 {
		font-weight: 500;
	}

	._c3 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	._c1 {
		position: relative;

		height: 1.75rem;

		width: 3rem;

		border-radius: 9999px;
	}

	._c2 {
		position: absolute;

		top: 0.25rem;

		height: 1.25rem;

		width: 1.25rem;

		border-radius: 9999px;

		background-color: var(--color-background-primary);

		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	.ft-track--on {
		background-color: var(--color-primary-600);
	}
	.ft-track--off {
		background-color: var(--color-background-tertiary);
	}
</style>
