<script lang="ts">
	import type { RecipeThemeSyntaxHighlightedCode } from '$stylist/development/interface/recipe/syntax-highlighted-code';
	import createSyntaxHighlightedCodeState from '$stylist/development/function/state/syntax-highlighted-code/index.svelte';
	import Code from '$stylist/development/component/molecule/code-block/index.svelte';

	let props: RecipeThemeSyntaxHighlightedCode = $props();

	const state = createSyntaxHighlightedCodeState(props);
</script>

<div {...props}>
	<Code
		code={state.code}
		language={state.language}
		showLineNumbers={state.showLineNumbers}
		class={state.containerClasses}
	/>
</div>

<style>
</style>
