import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * SelectControl РІР‚вЂќ Р Р†РЎвЂ№Р С—Р В°Р Т‘Р В°РЎР‹РЎвЂ°Р С‘Р в„– РЎРѓР С—Р С‘РЎРѓР С•Р С”..
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

export interface RecipeSelectControl
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IIconSlot, HTMLAttributes<HTMLSelectElement>]
	> {}
