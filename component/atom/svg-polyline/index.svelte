<script lang="ts">
	import type { RecipeSvgPolyline } from '$stylist/svg/interface/recipe/svg-polyline';

	let props: RecipeSvgPolyline = $props();
</script>

<polyline {...props}>
	{#if props.children}{@render props.children()}{/if}
</polyline>
