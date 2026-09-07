<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SvgLine from './index.svelte';
</script>

<Story
	title="SvgLine"
	description="Типизированная тонкая обёртка над нативным <line> — оси, сетка, разделители на графиках"
>
	<div class="page">
		<svg viewBox="0 0 100 40" width="200" height="80">
			<SvgLine x1="5" y1="35" x2="95" y2="35" stroke="currentColor" stroke-width="1" />
			<SvgLine x1="5" y1="35" x2="5" y2="5" stroke="currentColor" stroke-width="1" />
			<SvgLine
				x1="20"
				y1="30"
				x2="80"
				y2="10"
				stroke="currentColor"
				stroke-width="2"
				stroke-dasharray="4 2"
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
