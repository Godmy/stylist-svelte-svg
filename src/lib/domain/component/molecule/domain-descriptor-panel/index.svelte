<script lang="ts">
	import type { TypeDomainComponentDescriptor } from '$stylist/domain/type/struct/domain-component-descriptor';

	let {
		descriptor,
		class: className = ''
	}: {
		descriptor: TypeDomainComponentDescriptor;
		class?: string;
	} = $props();
</script>

<aside class="c-domain-descriptor-panel {className}" aria-label="Descriptor panel">
	<p class="eyebrow">Descriptor</p>
	<p class="entity-path">{descriptor.entityPath}</p>

	<div class="pill-row">
		<span class:active={descriptor.hasRecipePipeline} class="pill">recipe</span>
		<span class:active={descriptor.hasStatePipeline} class="pill">state</span>
		<span class:active={descriptor.hasStoryPreview} class="pill">story</span>
	</div>

	<div class="meta-grid">
		<p><strong>Component:</strong> {descriptor.componentModulePath ?? 'missing'}</p>
		<p><strong>Recipe:</strong> {descriptor.recipeTypePath ?? 'missing'}</p>
		<p><strong>State:</strong> {descriptor.stateFunctionPath ?? 'missing'}</p>
		<p><strong>Contracts:</strong> {descriptor.contractPaths.length}</p>
		<p><strong>Recipe JSON:</strong> {descriptor.interfaceRecipeJsonPaths.length}</p>
		<p><strong>Enum JSON:</strong> {descriptor.constEnumJsonPaths.length}</p>
		<p><strong>Map JSON:</strong> {descriptor.constMapJsonPaths.length}</p>
		<p><strong>State JSON:</strong> {descriptor.functionStateJsonPaths.length}</p>
		<p><strong>Script JSON:</strong> {descriptor.functionScriptJsonPaths.length}</p>
		<p><strong>Control JSON:</strong> {descriptor.controlDefinitionJsonPaths.length}</p>
	</div>
</aside>

<style>
	.c-domain-descriptor-panel {
		position: sticky;
		bottom: 1rem;
		justify-self: end;
		display: grid;
		gap: 0.55rem;
		max-width: 30rem;
		padding: 0.9rem 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.92);
		box-shadow: 0 14px 34px rgba(15, 23, 42, 0.12);
		backdrop-filter: blur(10px);
	}

	.eyebrow,
	.entity-path {
		margin: 0;
	}

	.eyebrow {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.entity-path {
		font-family: var(--font-mono, monospace);
		font-size: 0.8rem;
		overflow-wrap: anywhere;
	}

	.pill-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.pill {
		padding: 0.2rem 0.5rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 999px;
		font-size: 0.74rem;
		color: var(--color-text-secondary);
	}

	.pill.active {
		border-color: color-mix(in srgb, var(--color-primary-500) 46%, var(--color-border-primary) 54%);
		color: var(--color-text-primary);
		background: color-mix(in srgb, var(--color-primary-500) 10%, white 90%);
	}

	.meta-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.45rem 0.8rem;
		font-size: 0.78rem;
		color: var(--color-text-secondary);
	}

	.meta-grid p {
		margin: 0;
		overflow-wrap: anywhere;
	}

	@media (max-width: 960px) {
		.meta-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
