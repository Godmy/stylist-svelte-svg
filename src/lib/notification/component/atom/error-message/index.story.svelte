<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ErrorMessage from './index.svelte';

	let retried = $state(false);

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Failed to load data' },
		{
			name: 'errorType',
			type: 'select',
			defaultValue: 'string',
			options: ['string', 'error', 'none']
		},
		{ name: 'showRetry', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={ErrorMessage}
	title="ErrorMessage"
	description="Error feedback block with optional retry action."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ErrorMessage
				title={values.title}
				error={values.errorType === 'none'
					? null
					: values.errorType === 'error'
						? new Error('Unexpected server error')
						: 'Unable to connect to the service.'}
				showRetry={values.showRetry}
				onRetry={() => (retried = true)}
			/>
			<p class="_c2">Retry pressed: {retried ? 'yes' : 'no'}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
