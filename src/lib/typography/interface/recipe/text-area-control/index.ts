/**
 * TextAreaControl represents a multi-line text input contract.
 *
 * Composition:
 *   SlotLabel        label content
 *   SlotCaption      caption content
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface TextAreaControlRecipe
	extends StructIntersectAll<[ILabelSlot, ICaptionSlot, ThemeAttributes<HTMLTextAreaElement>]> {}
