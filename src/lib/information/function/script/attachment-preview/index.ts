import { createEventDispatcher } from 'svelte';
import type { SlotAttachment as Attachment } from '$stylist/information/interface/slot/attachment';

export function createAttachmentDispatch() {
	return createEventDispatcher<{
		remove: { attachment: Attachment };
		download: { attachment: Attachment };
	}>();
}
