import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Select РІР‚вЂќ Р Р†РЎвЂ№Р В±Р С•РЎР‚ Р С‘Р В· РЎРѓР С—Р С‘РЎРѓР С”Р В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 *   ICaptionSlot        (information) РІР‚вЂќ caption (Caption)
 *   IIconSlot        (information) РІР‚вЂќ icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeSelect
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IIconSlot, HTMLAttributes<HTMLSelectElement>]
	> {}
