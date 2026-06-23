import { createAttachmentDispatch } from '$stylist/information/function/script/attachment-preview';
import { handleDownload } from '$stylist/information/function/script/attachment-preview-handle-download';
import { handleRemove } from '$stylist/information/function/script/attachment-preview-handle-remove';
import type { RecipeAttachmentPreview } from '$stylist/information/interface/recipe/attachment-preview';

export function createAttachmentPreviewState(props: RecipeAttachmentPreview) {
	const dispatch = createAttachmentDispatch();

	function download(): void {
		handleDownload(dispatch, props.attachment);
	}

	function remove(): void {
		handleRemove(dispatch, props.attachment);
	}

	return {
		variant: 'default',
		size: 'md',
		disabled: false,
		showActions: props.showActions ?? true,
		classes: [props.class || ''].filter(Boolean).join(' '),
		download,
		remove
	};
}
