<script lang="ts">
	import createToggleWithDescriptionState from '$stylist/control/function/state/toggle-with-description/index.svelte';
	import type { ToggleWithDescriptionProps } from '$stylist/control/type/struct/toggle-with-description-props';

	let {
		checked = false,
		disabled = false,
		label,
		description,
		class: className = '',
		toggleClass: _toggleClass = '',
		labelClass: _labelClass = '',
		descriptionClass: _descriptionClass = '',
		onValueInput,
		onValueChange,
		onInput,
		onChange,
		...restProps
	}: ToggleWithDescriptionProps = $props();

	const state = createToggleWithDescriptionState({
		checked,
		disabled,
		label,
		description,
		class: className,
		onValueInput,
		onValueChange,
		onInput,
		onChange
	});
</script>

<div
	class="c-toggle-with-description"
	data-checked={state.isChecked || undefined}
	data-disabled={state.disabled || undefined}
	onclick={state.handleToggle}
	onkeydown={state.handleKeyDown}
	tabindex={disabled ? -1 : 0}
	role="switch"
	aria-checked={state.isChecked}
	{...restProps}
>
	<div class="c-toggle-with-description__toggle" aria-hidden="true">
		<input
			id="toggle-input"
			type="checkbox"
			class="c-toggle-with-description__input"
			checked={state.isChecked}
			onchange={state.handleToggle}
			{disabled}
		/>
		<div class="c-toggle-with-description__track"></div>
		<div class="c-toggle-with-description__thumb"></div>
	</div>

	<div class="c-toggle-with-description__content">
		<label for="toggle-input" class="c-toggle-with-description__label">
			{label}
		</label>
		<p class="c-toggle-with-description__description">
			{description}
		</p>
	</div>
</div>

<style>
	.c-toggle-with-description {
		display: flex;
		align-items: flex-start;
		padding: 1rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		cursor: pointer;
		gap: 0.75rem;
	}

	.c-toggle-with-description[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
		pointer-events: none;
	}

	.c-toggle-with-description__toggle {
		position: relative;
		display: inline-flex;
		flex-shrink: 0;
		height: 1.5rem;
		width: 2.75rem;
	}

	.c-toggle-with-description__input {
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

	.c-toggle-with-description__track {
		position: absolute;
		inset: 0;
		border-radius: 9999px;
		background: var(--color-border-primary);
		transition: background-color var(--duration-200, 200ms);
	}

	.c-toggle-with-description[data-checked] .c-toggle-with-description__track {
		background: var(--color-primary-500);
	}

	.c-toggle-with-description__thumb {
		position: absolute;
		top: 0.125rem;
		left: 0.125rem;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 9999px;
		background: var(--color-background-primary);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		transition: transform var(--duration-200, 200ms);
		transform: translateX(0);
		pointer-events: none;
	}

	.c-toggle-with-description[data-checked] .c-toggle-with-description__thumb {
		transform: translateX(1.25rem);
	}

	.c-toggle-with-description__content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.c-toggle-with-description__label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		cursor: pointer;
	}

	.c-toggle-with-description[data-disabled] .c-toggle-with-description__label {
		cursor: not-allowed;
	}

	.c-toggle-with-description__description {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin: 0;
	}
</style>
