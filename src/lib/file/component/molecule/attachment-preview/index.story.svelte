<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeAttachmentPreview from './index.svelte';

	type Props = {
		attachmentName: string;
		attachmentType: 'image' | 'document' | 'video' | 'audio';
		attachmentSize: number;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'attachmentName',
			type: 'text',
			defaultValue: 'example.pdf'
		},
		{
			name: 'attachmentType',
			type: 'select',
			defaultValue: 'document',
			options: ['image', 'document', 'video', 'audio']
		},
		{
			name: 'attachmentSize',
			type: 'number',
			defaultValue: 2400000
		}
	];
</script>

<Story
	id="molecules-attachment-preview"
	title="RecipeAttachmentPreview"
	component={RecipeAttachmentPreview}
	category="Molecules"
	description="A component to preview file attachments."
	tags={['file', 'preview', 'attachment']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<h2 class="_c2">Attachment Preview</h2>
			<div class="_c3">
				<RecipeAttachmentPreview
					attachment={{
						id: '1',
						name: values.attachmentName,
						type: values.attachmentType,
						size: values.attachmentSize
					}}
				/>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c2 {
		margin-bottom: 1.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-left: auto;
		margin-right: auto;
		max-width: 28rem;
	}
</style>
