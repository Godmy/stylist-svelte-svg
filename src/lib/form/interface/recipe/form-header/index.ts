import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotFormHeader } from '$stylist/form/interface/slot/form-header';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeFormHeader
	extends ComputeIntersectAll<[SlotFormHeader, ILabelSlot, ICaptionSlot]> {}
