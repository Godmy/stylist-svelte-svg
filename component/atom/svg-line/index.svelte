<script lang="ts">
	import type { RecipeSvgLine } from '$stylist/svg/interface/recipe/svg-line';

	let props: RecipeSvgLine = $props();
</script>

<line {...props}>
	{#if props.children}{@render props.children()}{/if}
</line>
