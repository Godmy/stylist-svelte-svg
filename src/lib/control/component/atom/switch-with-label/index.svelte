<script lang="ts">
	import type { RecipeSwitchWithLabel } from '$stylist/control/interface/recipe/switch-with-label';
	import { createSwitchWithLabelState } from '$stylist/control/function/state/switch-with-label/index.svelte';

	let props: RecipeSwitchWithLabel = $props();
	const state = createSwitchWithLabelState(props);

	const restProps = $derived.by(() => {
		const {
			checked,
			disabled,
			label,
			labelPosition,
			class: className,
			switchClass,
			labelClass,
			onValueInput,
			onValueChange,
			onInput,
			onChange,
			...rest
		} = props;
		return rest;
	});
</script>

<div
	class="c-switch-with-label"
	data-checked={state.checked || undefined}
	data-disabled={state.disabled || undefined}
	data-label-position={state.labelPosition}
	role="switch"
	aria-checked={state.checked}
	{...restProps}
>
	{#if state.labelPosition === 'left'}
		<label for="switch-input" class="c-switch-with-label__label">
			{state.label}
		</label>
	{/if}

	<div
		class="c-switch-with-label__track"
		role="switch"
		aria-checked={state.checked}
		onclick={state.handleToggle}
		onkeydown={state.handleKeyDown}
		tabindex={state.disabled ? -1 : 0}
	>
		<input
			id="switch-input"
			type="checkbox"
			class="c-switch-with-label__input"
			checked={state.checked}
			onchange={state.handleToggle}
			disabled={state.disabled}
		/>
		<span class="c-switch-with-label__knob"></span>
	</div>

	{#if state.labelPosition === 'right'}
		<label for="switch-input" class="c-switch-with-label__label">
			{state.label}
		</label>
	{/if}
</div>

<style>
	.c-switch-with-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.c-switch-with-label[data-label-position='left'] {
		flex-direction: row-reverse;
	}

	.c-switch-with-label[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
		pointer-events: none;
	}

	.c-switch-with-label__track {
		position: relative;
		display: inline-flex;
		align-items: center;
		height: 1.5rem;
		width: 2.75rem;
		border-radius: 9999px;
		background: var(--color-border-primary);
		transition: background-color var(--duration-200, 200ms);
		cursor: pointer;
		flex-shrink: 0;
	}

	.c-switch-with-label[data-checked] .c-switch-with-label__track {
		background: var(--color-primary-500);
	}

	.c-switch-with-label[data-disabled] .c-switch-with-label__track {
		cursor: not-allowed;
	}

	.c-switch-with-label__input {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
		border: 0;
	}

	.c-switch-with-label__knob {
		display: inline-block;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 9999px;
		background: var(--color-background-primary);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		transform: translateX(0.125rem);
		transition: transform var(--duration-200, 200ms);
		pointer-events: none;
	}

	.c-switch-with-label[data-checked] .c-switch-with-label__knob {
		transform: translateX(1.375rem);
	}

	.c-switch-with-label__label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		cursor: pointer;
	}

	.c-switch-with-label[data-disabled] .c-switch-with-label__label {
		cursor: not-allowed;
	}
</style>
