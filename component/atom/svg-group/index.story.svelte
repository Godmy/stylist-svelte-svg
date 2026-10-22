<script lang="ts">
	import SvgGroup from '$stylist/svg/component/atom/svg-group/index.svelte';
	import SvgCircle from '$stylist/svg/component/atom/svg-circle/index.svelte';
	import SvgLine from '$stylist/svg/component/atom/svg-line/index.svelte';
	import type { RecipeSvgGroup } from '$stylist/svg/interface/recipe/svg-group';

	// Render of index.story.ts: the group needs an `<svg>` parent and SVG primitive children.
	let args: RecipeSvgGroup = $props();
</script>

<svg viewBox="0 0 100 40" width="200" height="80" class="svg-group-story">
	<SvgGroup {...args}>
		<SvgLine x1="20" y1="35" x2="20" y2="10" stroke="currentColor" stroke-width="1" />
		<SvgCircle cx="20" cy="10" r="4" fill="currentColor" />
	</SvgGroup>
</svg>

<style>
	.svg-group-story {
		color: var(--color-text-primary);
	}
</style>
