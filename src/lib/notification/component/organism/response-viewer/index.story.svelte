<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ResponseViewer from './index.svelte';

	type Props = {
		title: string;
		status: 'success' | 'error' | 'info';
		showLineNumbers: boolean;
		showCopyButton: boolean;
		showDownloadButton: boolean;
		collapsed: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'API Response' },
		{
			name: 'status',
			type: 'select',
			options: ['success', 'error', 'info'],
			defaultValue: 'success'
		},
		{ name: 'showLineNumbers', type: 'boolean', defaultValue: true },
		{ name: 'showCopyButton', type: 'boolean', defaultValue: true },
		{ name: 'showDownloadButton', type: 'boolean', defaultValue: false },
		{ name: 'collapsed', type: 'boolean', defaultValue: false }
	];

	const successResponse = JSON.stringify({ ok: true, items: [1, 2, 3], total: 3 }, null, 2);
	const errorResponse = JSON.stringify({ ok: false, error: 'Not found', code: 404 }, null, 2);
	const infoResponse = JSON.stringify(
		{ message: 'Rate limit: 100 requests/hour', remaining: 95 },
		null,
		2
	);

	function getResponseByStatus(status: string) {
		switch (status) {
			case 'error':
				return errorResponse;
			case 'info':
				return infoResponse;
			default:
				return successResponse;
		}
	}

	function handleCopy(content: string) {
		console.log('Content copied:', content);
	}

	function handleDownload(content: string) {
		console.log('Content downloaded:', content);
	}
</script>

<Story
	id="organisms-response-viewer"
	title="Organisms / Interaction / Feedback / Response Viewer"
	component={ResponseViewer}
	category="Organisms/Interaction/Feedback"
	description="A response viewer component for displaying API responses with syntax highlighting and actions."
	tags={['response', 'api', 'json', 'viewer']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-response-viewer _c1">
			<h1 class="_c2">ResponseViewer Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive ResponseViewer</h2>
				<div class="_c5">
					<ResponseViewer
						title={values.title}
						status={values.status}
						response={getResponseByStatus(values.status)}
					/>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
		overflow: hidden;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		max-width: 42rem;
	}
</style>
