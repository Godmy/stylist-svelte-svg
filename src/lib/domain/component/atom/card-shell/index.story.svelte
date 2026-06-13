<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CardShell from './index.svelte';
	import CloseIcon from '../close-icon/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'expanded', type: 'boolean', defaultValue: true },
		{ name: 'title', type: 'text', defaultValue: 'Graph Node Controls' }
	];
</script>

<Story
	{controls}
	component={CardShell}
	title="CardShell"
	description="Expandable shell used by the orbit tooling panel."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2">
				<CardShell expanded={Boolean(values.expanded)} title={values.title as string}>
					{#snippet children()}
						<button type="button" class="_c3">Layout</button>
						<button type="button" class="_c3">Variants</button>
						<button type="button" class="_c3">States</button>
					{/snippet}

					{#snippet close()}
						<CloseIcon expanded={Boolean(values.expanded)} />
					{/snippet}
				</CardShell>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;
		height: 18rem;
		overflow: hidden;
		border-radius: 1.5rem;
		background-color: radial-gradient(circle at top, #dbeafe, transparent 60%), #eff6ff;
		padding: 2rem;
	}
	._c2 {
		position: absolute;
		top: 4rem;
		left: 2.5rem;
	}
	._c3 {
		border-radius: 9999px;
		background-color: #f1f5f9;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		color: #334155;
	}
</style>
