<script lang="ts">
	import createAdvancedToggleState from '$stylist/control/function/state/advanced-toggle/index.svelte';
	import type { RecipeAdvancedToggleProps } from '$stylist/control/type/struct/advanced-toggle-props';

	let props: RecipeAdvancedToggleProps = $props();
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				disabled: _disabled,
				size: _size,
				label: _label,
				checked: _checked,
				onValueInput: _onValueInput,
				onValueChange: _onValueChange,
				onChange: _onChange,
				...rest
			} = props;
			return rest;
		})()
	);

	const state = createAdvancedToggleState(props);
</script>

<div
	class="c-advanced-toggle"
	data-size={state.size}
	data-checked={state.checked || undefined}
	data-disabled={state.disabled || undefined}
	{...restProps}
>
	<label class="c-advanced-toggle__label-wrapper">
		<div class="c-advanced-toggle__toggle-container">
			<input
				type="checkbox"
				class="c-advanced-toggle__input"
				checked={state.checked}
				disabled={state.disabled}
				onchange={state.handleChange}
			/>
			<div class="c-advanced-toggle__track"></div>
			<div class="c-advanced-toggle__thumb"></div>
		</div>
		<span class="c-advanced-toggle__label-text">{state.label}</span>
	</label>
</div>

<style>
	.c-advanced-toggle {
		position: relative;
		display: inline-flex;
		align-items: center;
	}

	.c-advanced-toggle[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
		pointer-events: none;
	}

	.c-advanced-toggle__label-wrapper {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
	}

	.c-advanced-toggle[data-disabled] .c-advanced-toggle__label-wrapper {
		cursor: not-allowed;
	}

	.c-advanced-toggle__toggle-container {
		position: relative;
		display: inline-flex;
		align-items: center;
	}

	.c-advanced-toggle__input {
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
		margin: 0;
	}

	.c-advanced-toggle[data-disabled] .c-advanced-toggle__input {
		cursor: not-allowed;
	}

	.c-advanced-toggle__track {
		--t-tx: 1.125rem;
		position: relative;
		display: inline-flex;
		height: 1.25rem;
		width: 2.5rem;
		border-radius: 9999px;
		background: var(--color-border-primary);
		transition: background-color var(--duration-200, 200ms);
		cursor: pointer;
	}

	.c-advanced-toggle[data-size='xs'] .c-advanced-toggle__track {
		height: 0.875rem;
		width: 1.75rem;
		--t-tx: 0.75rem;
	}

	.c-advanced-toggle[data-size='sm'] .c-advanced-toggle__track {
		height: 1rem;
		width: 2rem;
		--t-tx: 0.875rem;
	}

	.c-advanced-toggle[data-size='lg'] .c-advanced-toggle__track {
		height: 1.5rem;
		width: 3rem;
		--t-tx: 1.375rem;
	}

	.c-advanced-toggle[data-size='xl'] .c-advanced-toggle__track {
		height: 1.75rem;
		width: 3.5rem;
		--t-tx: 1.625rem;
	}

	.c-advanced-toggle[data-size='2xl'] .c-advanced-toggle__track {
		height: 2rem;
		width: 4rem;
		--t-tx: 1.875rem;
	}

	.c-advanced-toggle[data-checked] .c-advanced-toggle__track {
		background: var(--color-primary-500);
	}

	.c-advanced-toggle__thumb {
		position: absolute;
		top: 0.125rem;
		left: 0.125rem;
		width: 1rem;
		height: 1rem;
		border-radius: 9999px;
		background: var(--color-background-primary);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		transition: transform var(--duration-200, 200ms);
		transform: translateX(0);
		pointer-events: none;
	}

	.c-advanced-toggle[data-size='xs'] .c-advanced-toggle__thumb {
		width: 0.625rem;
		height: 0.625rem;
	}

	.c-advanced-toggle[data-size='sm'] .c-advanced-toggle__thumb {
		width: 0.75rem;
		height: 0.75rem;
	}

	.c-advanced-toggle[data-size='lg'] .c-advanced-toggle__thumb {
		width: 1.25rem;
		height: 1.25rem;
	}

	.c-advanced-toggle[data-size='xl'] .c-advanced-toggle__thumb {
		width: 1.5rem;
		height: 1.5rem;
	}

	.c-advanced-toggle[data-size='2xl'] .c-advanced-toggle__thumb {
		width: 1.75rem;
		height: 1.75rem;
	}

	.c-advanced-toggle[data-checked] .c-advanced-toggle__thumb {
		transform: translateX(var(--t-tx, 1.125rem));
	}

	.c-advanced-toggle__label-text {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-advanced-toggle[data-disabled] .c-advanced-toggle__label-text {
		color: var(--color-text-secondary);
	}
</style>
