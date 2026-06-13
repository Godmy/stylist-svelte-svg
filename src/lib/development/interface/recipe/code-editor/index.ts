import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeCodeEditor
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, HTMLAttributes<HTMLDivElement>]
	> {
	code?: string;
	language?: string;
	height?: string;
	width?: string;
	readOnly?: boolean;
	showLineNumbers?: boolean;
	FONT_SIZE?: number;
	showCopyButton?: boolean;
	onCodeChange?: (code: string) => void;
}
