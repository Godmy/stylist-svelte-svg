<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SvgPolygon from './index.svelte';
</script>

<Story
	title="SvgPolygon"
	description="Типизированная тонкая обёртка над нативным <polygon> — радар-диаграммы, залитые области, произвольные фигуры"
>
	<div class="page">
		<svg viewBox="0 0 100 40" width="200" height="80">
			<SvgPolygon
				points="20,5 35,15 30,35 10,35 5,15"
				fill="currentColor"
				opacity="0.4"
				stroke="currentColor"
				stroke-width="1"
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
