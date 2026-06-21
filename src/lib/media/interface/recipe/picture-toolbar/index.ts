import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

type PictureToolbarTool = { [key: string]: any };

export interface RecipePictureToolbar
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLDivElement>]> {
	tools: PictureToolbarTool[];
	activeTool?: string;
	onToolSelect?: (toolId: string) => void;
}
