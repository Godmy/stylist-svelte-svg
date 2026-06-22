import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotFormHeader } from '$stylist/form/interface/slot/form-header';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeFormHeader
	extends ComputeIntersectAll<[SlotFormHeader, ILabelSlot, ICaptionSlot]> {}
