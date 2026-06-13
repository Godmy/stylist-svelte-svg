<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import ErrorBoundary from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const controls = [
		{
			name: 'showError',
			type: 'boolean' as TokenControllerType,
			defaultValue: false,
			description: 'Whether to show error state'
		},
		{
			name: 'title',
			type: 'text' as TokenControllerType,
			defaultValue: 'Something went wrong',
			description: 'Error title'
		},
		{
			name: 'message',
			type: 'text' as TokenControllerType,
			defaultValue: 'An unexpected error occurred. Please try again.',
			description: 'Error message'
		}
	];
</script>

<Story
	{controls}
	title="ErrorBoundary Component"
	description="A component that catches and displays errors in its child components"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<div class="_c2">
				<ErrorBoundary title={controlValues.title} message={controlValues.message}>
					{#if !controlValues.showError}
						<div class="_c3">
							<h3 class="_c4">Normal Content</h3>
							<p class="_c5">This content displays when no error occurs</p>
						</div>
					{:else}
						<div class="_c6">
							<h3 class="_c7">Simulated Error</h3>
							<p>This would trigger the error boundary in a real scenario</p>
						</div>
					{/if}
				</ErrorBoundary>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c2 {
		max-width: 28rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 1rem;
	}
	._c3 {
		padding-top: 2rem;
		padding-bottom: 2rem;
		text-align: center;
	}
	._c4 {
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c5 {
		color: var(--color-text-secondary);
	}
	._c6 {
		padding-top: 2rem;
		padding-bottom: 2rem;
		text-align: center;
		color: var(--color-danger-500);
	}
	._c7 {
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
	}
</style>
