<script lang="ts">
	import type { RecipeSvgRect } from '$stylist/svg/interface/recipe/svg-rect';

	let props: RecipeSvgRect = $props();
</script>

<rect {...props}>
	{#if props.children}{@render props.children()}{/if}
</rect>
