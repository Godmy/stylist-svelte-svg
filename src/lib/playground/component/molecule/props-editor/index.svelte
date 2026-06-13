<script lang="ts">
	import type { RecipePropsEditor } from '$stylist/playground/interface/recipe/props-editor';
	import { createPropsEditorState } from '$stylist/playground/function/state/props-editor/index.svelte';

	let {
		propDefinitions = [],
		propValues = {},
		onPropChange,
		class: className = '',
		...restProps
	}: RecipePropsEditor = $props();

	const state = createPropsEditorState({
		propDefinitions,
		propValues,
		onPropChange,
		class: className,
		...restProps
	});
</script>

<div class={state.containerClass} role="region" aria-label="Props editor">
	<div class="pe-title">Props Editor</div>
	<div class="pe-fields">
		{#each propDefinitions as def}
			<div class="pe-field">
				<label class="pe-label" for={`prop-${def.name}`}
					>{def.name} <span class="pe-type">({def.type})</span></label
				>
				{#if def.type === 'boolean'}
					<input
						id={`prop-${def.name}`}
						type="checkbox"
						checked={Boolean(state.internalPropValues[def.name] ?? def.defaultValue ?? false)}
						onchange={(e) =>
							state.handlePropChange(def.name, (e.target as HTMLInputElement).checked)}
					/>
				{:else if def.type === 'number'}
					<input
						id={`prop-${def.name}`}
						type="number"
						class="pe-input"
						value={Number(state.internalPropValues[def.name] ?? def.defaultValue ?? 0)}
						min={def.min}
						max={def.max}
						step={def.step}
						oninput={(e) =>
							state.handlePropChange(def.name, Number((e.target as HTMLInputElement).value))}
					/>
				{:else if def.type === 'enum'}
					<select
						id={`prop-${def.name}`}
						class="pe-input"
						value={String(state.internalPropValues[def.name] ?? def.defaultValue ?? '')}
						onchange={(e) =>
							state.handlePropChange(def.name, (e.target as HTMLSelectElement).value)}
					>
						{#each def.options ?? [] as option}<option value={option}>{option}</option>{/each}
					</select>
				{:else}
					<input
						id={`prop-${def.name}`}
						type="text"
						class="pe-input"
						value={String(state.internalPropValues[def.name] ?? def.defaultValue ?? '')}
						oninput={(e) => state.handlePropChange(def.name, (e.target as HTMLInputElement).value)}
					/>
				{/if}
				{#if def.description}<div class="pe-desc">{def.description}</div>{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.pe-title {
		margin-bottom: 0.75rem;
		font-weight: 600;
	}
	.pe-fields {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.pe-field {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.pe-label {
		font-size: 0.875rem;
		font-weight: 500;
	}
	.pe-type {
		font-size: 0.75rem;
		color: #6b7280;
	}
	.pe-input {
		width: 100%;
		border-radius: 0.25rem;
		border: 1px solid var(--color-border-primary);
		padding: 0.5rem;
	}
	.pe-desc {
		font-size: 0.75rem;
		color: #6b7280;
	}
</style>
