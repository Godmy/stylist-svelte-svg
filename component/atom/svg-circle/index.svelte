<script lang="ts">
	import type { RecipeSvgCircle } from '$stylist/svg/interface/recipe/svg-circle';

	let props: RecipeSvgCircle = $props();
</script>

<circle {...props}>
	{#if props.children}{@render props.children()}{/if}
</circle>
