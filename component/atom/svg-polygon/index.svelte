<script lang="ts">
	import type { RecipeSvgPolygon } from '$stylist/svg/interface/recipe/svg-polygon';

	let props: RecipeSvgPolygon = $props();
</script>

<polygon {...props}>
	{#if props.children}{@render props.children()}{/if}
</polygon>
