<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SvgCircle from './index.svelte';
</script>

<Story
	title="SvgCircle"
	description="Типизированная тонкая обёртка над нативным <circle> — точки на графиках, легенды, маркеры"
>
	<div class="page">
		<svg viewBox="0 0 100 40" width="200" height="80">
			<SvgCircle cx="20" cy="20" r="8" fill="currentColor" />
			<SvgCircle cx="50" cy="20" r="8" stroke="currentColor" stroke-width="2" fill="none" />
			<SvgCircle cx="80" cy="20" r="8" fill="currentColor" opacity="0.5" />
		</svg>
	</div>
</Story>

<style>
	.page {
		padding: 1.5rem;
		color: var(--color-text-primary);
	}
</style>
