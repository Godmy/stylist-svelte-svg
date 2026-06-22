import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type Props = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	accept?: string;
	maxSize?: number;
	multiple?: boolean;
	status?: 'idle' | 'uploading' | 'success' | 'error';
	file?: File | null;
	onFileSelect?: (file: File | FileList | null) => void;
	onUpload?: (file: File) => Promise<void>;
	children?: Snippet;
	disabled?: boolean;
	uploadText?: string;
};
