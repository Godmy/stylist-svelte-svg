import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * AtomicPrinciples РІР‚вЂќ Р Р†Р С‘Р В·РЎС“Р В°Р В»Р С‘Р В·Р В°РЎвЂ Р С‘РЎРЏ Р В°РЎвЂљР С•Р СР В°РЎР‚Р Р…РЎвЂ№РЎвЂ¦ Р С—РЎР‚Р С‘Р Р…РЎвЂ Р С‘Р С—Р С•Р Р†..
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

export interface RecipeAtomicPrinciples
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IBadgeSlot, HTMLAttributes<HTMLDivElement>]
	> {
	stats?: { atoms: number; molecules: number; organisms: number };
	badgeText?: string;
}
