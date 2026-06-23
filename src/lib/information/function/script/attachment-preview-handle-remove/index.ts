import { createAttachmentDispatch } from '$stylist/information/function/script/attachment-preview';
import type { SlotAttachment as Attachment } from '$stylist/information/interface/slot/attachment';

export function handleRemove(
	dispatch: ReturnType<typeof createAttachmentDispatch>,
	attachment: Attachment
): void {
	dispatch('remove', { attachment });
}
