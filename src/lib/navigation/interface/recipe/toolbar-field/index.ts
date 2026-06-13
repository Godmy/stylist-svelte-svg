import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * ToolbarField РІР‚вЂќ Р С—Р С•Р В»Р Вµ РЎвЂљРЎС“Р В»Р В±Р В°РЎР‚Р В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 *   IIconSlot        (information) РІР‚вЂќ icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeToolbarField
	extends StructIntersectAll<[SlotTheme, ILabelSlot, IIconSlot, HTMLAttributes<HTMLDivElement>]> {}
