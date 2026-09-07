<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SvgGroup from './index.svelte';
	import SvgCircle from '$stylist/svg/component/atom/svg-circle/index.svelte';
	import SvgLine from '$stylist/svg/component/atom/svg-line/index.svelte';
</script>

<Story
	title="SvgGroup"
	description="Типизированная тонкая обёртка над нативным <g> — группировка примитивов с общей transform/aria"
>
	<div class="page">
		<svg viewBox="0 0 100 40" width="200" height="80">
			<SvgGroup transform="translate(0, 0)" aria-label="Точка данных">
				<SvgLine x1="20" y1="35" x2="20" y2="10" stroke="currentColor" stroke-width="1" />
				<SvgCircle cx="20" cy="10" r="4" fill="currentColor" />
			</SvgGroup>
			<SvgGroup transform="translate(50, 0)" opacity="0.5">
				<SvgLine x1="20" y1="35" x2="20" y2="20" stroke="currentColor" stroke-width="1" />
				<SvgCircle cx="20" cy="20" r="4" fill="currentColor" />
			</SvgGroup>
		</svg>
	</div>
</Story>

<style>
	.page {
		padding: 1.5rem;
		color: var(--color-text-primary);
	}
</style>
