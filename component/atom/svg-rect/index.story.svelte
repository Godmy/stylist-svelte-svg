<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SvgRect from './index.svelte';
</script>

<Story
	title="SvgRect"
	description="Типизированная тонкая обёртка над нативным <rect> — столбцы диаграмм, фон, области выделения"
>
	<div class="page">
		<svg viewBox="0 0 100 40" width="200" height="80">
			<SvgRect x="5" y="10" width="15" height="25" fill="currentColor" />
			<SvgRect x="30" y="5" width="15" height="30" fill="currentColor" opacity="0.6" />
			<SvgRect x="55" y="15" width="15" height="20" rx="3" fill="currentColor" opacity="0.3" />
		</svg>
	</div>
</Story>

<style>
	.page {
		padding: 1.5rem;
		color: var(--color-text-primary);
	}
</style>
