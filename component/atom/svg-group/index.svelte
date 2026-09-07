<script lang="ts">
	import type { RecipeSvgGroup } from '$stylist/svg/interface/recipe/svg-group';

	let props: RecipeSvgGroup = $props();
</script>

<g {...props}>
	{#if props.children}{@render props.children()}{/if}
</g>
