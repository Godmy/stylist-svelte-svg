<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import Flag from './index.svelte';
	import { TOKEN_FLAG_REGISTRY } from '$stylist/svg/const/record/flag-registry';

	const allFlagCodes = Object.keys(TOKEN_FLAG_REGISTRY).sort();

	let search = $state('');

	const filtered = $derived(
		search.trim()
			? allFlagCodes.filter((c) => c.includes(search.trim().toLowerCase()))
			: allFlagCodes
	);

	const sizes = ['1rem', '1.5rem', '2rem', '3rem', '4rem'] as const;
	const localeCodes = ['es-ES', 'en-GB', 'fr-FR', 'de-DE', 'pt-BR'] as const;
</script>

<Story
	title="Flag"
	description="Флаг страны по коду из TOKEN_FLAG_REGISTRY с текстовым fallback для неизвестных кодов"
>
	<div class="page">
		<section class="section">
			<h2 class="section-title">Размеры</h2>
			<div class="row align-end">
				{#each sizes as size}
					<div class="cell">
						<Flag code="es" {size} />
						<span class="label">{size}</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Локали (code с регионом)</h2>
			<div class="row">
				{#each localeCodes as code}
					<div class="cell">
						<Flag {code} size="2rem" />
						<span class="label">{code}</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Fallback (неизвестный код)</h2>
			<div class="row">
				<div class="cell">
					<Flag code="xx" size="2rem" />
					<span class="label">code="xx"</span>
				</div>
				<div class="cell">
					<Flag flag="zz" size="2rem" />
					<span class="label">flag="zz"</span>
				</div>
				<div class="cell">
					<Flag size="2rem" />
					<span class="label">без пропсов</span>
				</div>
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Все флаги — {filtered.length} / {allFlagCodes.length}</h2>
			<input class="search" type="search" placeholder="Поиск по коду..." bind:value={search} />
			<div class="grid">
				{#each filtered as code (code)}
					<div class="flag-cell" title={code}>
						<Flag {code} size="2rem" />
						<span class="flag-label">{code}</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">API</h2>
			<table class="api-table">
				<thead>
					<tr>
						<th>Prop</th>
						<th>Тип</th>
						<th>По умолчанию</th>
						<th>Описание</th>
					</tr>
				</thead>
				<tbody>
					<tr
						><td><code>flag</code></td><td><code>string</code></td><td>—</td><td
							>Код флага (приоритетнее <code>code</code>)</td
						></tr
					>
					<tr
						><td><code>code</code></td><td><code>string</code></td><td>—</td><td
							>Код страны или локаль вида <code>en-GB</code> (берётся часть после дефиса)</td
						></tr
					>
					<tr
						><td><code>size</code></td><td><code>number | string</code></td><td
							><code>1.5rem</code></td
						><td>Размер флага</td></tr
					>
					<tr
						><td><code>class</code></td><td><code>string</code></td><td><code>''</code></td><td
							>CSS-классы на корневом span</td
						></tr
					>
				</tbody>
			</table>
		</section>
	</div>
</Story>

<style>
	.page {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.section-title {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.align-end {
		align-items: flex-end;
	}

	.cell {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 1.25rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 8px;
		background: var(--color-background-primary);
	}

	.label {
		font-size: 0.7rem;
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
	}

	.search {
		width: 100%;
		max-width: 320px;
		padding: 0.4rem 0.75rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 6px;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font-size: 0.875rem;
		outline: none;
	}

	.search:focus {
		border-color: var(--color-primary-500);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
		gap: 0.5rem;
	}

	.flag-cell {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.35rem;
		padding: 0.6rem 0.25rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 8px;
		background: var(--color-background-primary);
		cursor: default;
		transition: background 120ms;
	}

	.flag-cell:hover {
		background: var(--color-background-secondary);
	}

	.flag-label {
		font-size: 0.6rem;
		color: var(--color-text-secondary);
		font-family: var(--font-mono, monospace);
		text-align: center;
		word-break: break-all;
		line-height: 1.3;
	}

	.api-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.8125rem;
	}

	.api-table th,
	.api-table td {
		padding: 0.6rem 0.875rem;
		text-align: left;
		border: 1px solid var(--color-border-primary);
		color: var(--color-text-primary);
	}

	.api-table th {
		background: var(--color-background-secondary);
		font-weight: 600;
	}

	.api-table code {
		font-family: var(--font-mono, monospace);
		font-size: 0.75rem;
		color: var(--color-primary-600);
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		padding: 0.1em 0.35em;
		border-radius: 4px;
	}
</style>
