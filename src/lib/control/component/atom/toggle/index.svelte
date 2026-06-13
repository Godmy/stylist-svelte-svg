<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { RecipeToggle } from '$stylist/control/interface/recipe/toggle';
	import { createToggleState } from '$stylist/control/function/state/toggle/index.svelte';

	let props: RecipeToggle & HTMLInputAttributes = $props();
	const state = createToggleState(props);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			size: _size,
			disabled: _disabled,
			checked: _checked,
			ariaLabel: _ariaLabel,
			id: _id,
			name: _name,
			...rest
		} = props;
		return rest;
	});
</script>

<div
	class="c-toggle"
	data-size={state.size}
	data-checked={state.checked || undefined}
	data-disabled={state.disabled || undefined}
>
	<input
		id={props.id}
		name={props.name}
		type="checkbox"
		bind:checked={props.checked}
		disabled={state.disabled}
		class="c-toggle__input"
		aria-label={state.ariaLabel}
		role="switch"
		aria-checked={state.checked ? 'true' : 'false'}
		{...restProps}
	/>

	<span class="c-toggle__track">
		<span class="c-toggle__thumb"></span>
	</span>
</div>

<style>
	.c-toggle {
		position: relative;
		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}

	.c-toggle__input {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.c-toggle__track {
		--toggle-translate: 1.375rem;
		position: relative;
		display: inline-flex;
		height: 1.5rem;
		width: 2.75rem;
		border-radius: 9999px;
		background: var(--color-border-primary);
		transition: background-color var(--duration-200, 200ms);
		cursor: pointer;
	}

	.c-toggle[data-size='xs'] .c-toggle__track {
		height: 0.875rem;
		width: 1.75rem;
		--toggle-translate: 0.75rem;
	}

	.c-toggle[data-size='sm'] .c-toggle__track {
		height: 1rem;
		width: 2rem;
		--toggle-translate: 0.875rem;
	}

	.c-toggle[data-size='md'] .c-toggle__track {
		height: 1.25rem;
		width: 2.5rem;
		--toggle-translate: 1.125rem;
	}

	.c-toggle[data-size='lg'] .c-toggle__track {
		height: 1.5rem;
		width: 3rem;
		--toggle-translate: 1.375rem;
	}

	.c-toggle[data-size='xl'] .c-toggle__track {
		height: 1.75rem;
		width: 3.5rem;
		--toggle-translate: 1.625rem;
	}

	.c-toggle[data-size='2xl'] .c-toggle__track {
		height: 2rem;
		width: 4rem;
		--toggle-translate: 1.875rem;
	}

	.c-toggle[data-checked] .c-toggle__track {
		background: var(--color-primary-500);
	}

	.c-toggle[data-disabled] .c-toggle__track {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
	}

	.c-toggle__thumb {
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

	.c-toggle[data-size='xs'] .c-toggle__thumb {
		width: 0.625rem;
		height: 0.625rem;
	}

	.c-toggle[data-size='sm'] .c-toggle__thumb {
		width: 0.75rem;
		height: 0.75rem;
	}

	.c-toggle[data-size='lg'] .c-toggle__thumb {
		width: 1.375rem;
		height: 1.375rem;
	}

	.c-toggle[data-size='xl'] .c-toggle__thumb {
		width: 1.625rem;
		height: 1.625rem;
	}

	.c-toggle[data-size='2xl'] .c-toggle__thumb {
		width: 1.875rem;
		height: 1.875rem;
	}

	.c-toggle[data-checked] .c-toggle__thumb {
		transform: translateX(var(--toggle-translate, 1.375rem));
	}
</style>
