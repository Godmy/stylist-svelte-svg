<script lang="ts">
	import type { RecipeGraphCanvas } from '$stylist/science/interface/recipe/graph-canvas';
	import { createGraphCanvasState } from '$stylist/science/function/state/graph-canvas/index.svelte';
	let props: RecipeGraphCanvas = $props();
	const state = createGraphCanvasState(props);

	let canvasRef: HTMLDivElement;
	let contentRef: HTMLDivElement;

	$effect(() => {
		const customEvent = new CustomEvent('graph-canvas-ready', {
			detail: {
				resetView: state.resetView,
				zoomToFit: () => state.zoomToFit(canvasRef, contentRef),
				snapToGrid: state.snapToGrid
			}
		});
		canvasRef?.dispatchEvent(customEvent);
	});
</script>

<div
	bind:this={canvasRef}
	class={state.containerClass}
	style={`width: ${state.width}px; height: ${state.height}px; overflow: hidden;`}
	onwheel={state.handleWheel}
	onmousedown={state.handleMouseDown}
	onmousemove={state.handleMouseMove}
	onmouseup={state.handleMouseUp}
	onmouseleave={state.handleMouseUp}
	onclick={state.handleClick}
	ondblclick={state.handleDoubleClick}
	oncontextmenu={state.handleContextMenu}
	{...state.restProps}
>
	<!-- Grid layer -->
	<div
		class={state.gridClass}
		style={`${state.gridStyles} ${state.transformStyle}`}
		aria-hidden="true"
	></div>

	<!-- Content layer -->
	<div bind:this={contentRef} class={state.contentClass} style={state.transformStyle}>
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	</div>
</div>
