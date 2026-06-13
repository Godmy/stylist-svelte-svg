import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * InputControl РІР‚вЂќ Р С—Р С•Р В»Р Вµ Р Р†Р Р†Р С•Р Т‘Р В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 *   ICaptionSlot        (information) РІР‚вЂќ caption (Caption)
 *   IIconSlot        (information) РІР‚вЂќ icon (Icon)
 *   IStatusSlot        (information) РІР‚вЂќ status (Status)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeInputControl
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IIconSlot, IStatusSlot, HTMLAttributes<HTMLInputElement>]
	> {}
