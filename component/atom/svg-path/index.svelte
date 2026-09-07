<script lang="ts">
	import type { RecipeSvgPath } from '$stylist/svg/interface/recipe/svg-path';

	let props: RecipeSvgPath = $props();
</script>

<path {...props}>
	{#if props.children}{@render props.children()}{/if}
</path>
