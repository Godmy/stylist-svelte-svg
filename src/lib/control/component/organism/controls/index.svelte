<script lang="ts">
	import createControlsState from '$stylist/control/function/state/controls/index.svelte';

	let props = $props();
	const state = createControlsState(props);
</script>

<div class="_c1" aria-hidden="true"></div>

<style>
	._c1 {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
