import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * IconCircle РІР‚вЂќ Р С‘Р С”Р С•Р Р…Р С”Р В° Р С”РЎР‚РЎС“Р С–Р В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   IIconSlot        (information) РІР‚вЂќ icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';

export interface RecipeIconCircle
	extends StructIntersectAll<[SlotTheme, IIconSlot, HTMLAttributes<SVGSVGElement>]> {}
