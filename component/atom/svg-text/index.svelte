<script lang="ts">
	import type { RecipeSvgText } from '$stylist/svg/interface/recipe/svg-text';

	let props: RecipeSvgText = $props();
</script>

<text {...props}>
	{#if props.children}{@render props.children()}{/if}
</text>
