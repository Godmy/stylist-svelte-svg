import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Slider РІР‚вЂќ Р С—Р С•Р В»Р В·РЎС“Р Р…Р С•Р С”..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 *   ICaptionSlot        (information) РІР‚вЂќ caption (Caption)
 *   IBadgeSlot        (information) РІР‚вЂќ badge (Badge)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeSlider
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IBadgeSlot, HTMLAttributes<HTMLInputElement>]
	> {}
