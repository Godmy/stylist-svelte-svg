import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeProgressBar
	extends ComputeIntersectAll<[ILabelSlot, ICaptionSlot, IStatusSlot]> {}
