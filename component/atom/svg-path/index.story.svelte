<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SvgPath from './index.svelte';
</script>

<Story
	title="SvgPath"
	description="Типизированная тонкая обёртка над нативным <path> — примитив для ручной отрисовки графиков и диаграмм"
>
	<div class="page">
		<svg viewBox="0 0 100 40" width="200" height="80">
			<SvgPath
				d="M2 30 L20 10 L40 25 L60 5 L80 20 L98 8"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
			/>
		</svg>
	</div>
</Story>

<style>
	.page {
		padding: 1.5rem;
		color: var(--color-text-primary);
	}
</style>
