<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import PrismaticOrbitL6 from './index.svelte';
</script>

<Story
	component={PrismaticOrbitL6}
	title="PrismaticOrbitL6"
	description="Interactive L6 shell combining movable seed, orbit layers, and expandable control card."
>
	{#snippet children()}
		<div class="_c1">
			<PrismaticOrbitL6 />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 1.5rem;
		background-color: linear-gradient(180deg, #dbeafe, #f8fafc);
		padding: 2rem;
	}
</style>
