<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SvgText from './index.svelte';
</script>

<Story
	title="SvgText"
	description="Типизированная тонкая обёртка над нативным <text> — подписи осей, значения, легенды на графиках"
>
	<div class="page">
		<svg viewBox="0 0 100 40" width="200" height="80">
			<SvgText x="10" y="20" fill="currentColor" font-size="8">Ось X</SvgText>
			<SvgText x="10" y="35" fill="currentColor" font-size="6" opacity="0.6">0..100</SvgText>
			<SvgText x="90" y="20" fill="currentColor" font-size="8" text-anchor="end">42%</SvgText>
		</svg>
	</div>
</Story>

<style>
	.page {
		padding: 1.5rem;
		color: var(--color-text-primary);
	}
</style>
