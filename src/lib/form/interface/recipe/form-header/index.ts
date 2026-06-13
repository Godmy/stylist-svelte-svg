import type { SlotFormHeader as Slot } from '$stylist/form/interface/slot/form-header';
import type { SlotFormHeader as SlotFormHeader } from '$stylist/form/interface/slot/form-header';
/**
 * Form Header вЂ” Р·Р°РіРѕР»РѕРІРѕРє С„РѕСЂРјС‹.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeFormHeader
	extends StructIntersectAll<[Slot, SlotFormHeader, ILabelSlot, ICaptionSlot]> {}
