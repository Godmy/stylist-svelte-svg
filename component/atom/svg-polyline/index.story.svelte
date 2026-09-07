<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SvgPolyline from './index.svelte';
</script>

<Story
	title="SvgPolyline"
	description="Типизированная тонкая обёртка над нативным <polyline> — линейные графики по массиву точек"
>
	<div class="page">
		<svg viewBox="0 0 100 40" width="200" height="80">
			<SvgPolyline
				points="2,30 20,10 40,25 60,5 80,20 98,8"
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
