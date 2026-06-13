import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * IconWrapper РІР‚вЂќ Р С•Р В±РЎвЂРЎР‚РЎвЂљР С”Р В° Р С‘Р С”Р С•Р Р…Р С”Р С‘..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   IIconSlot        (information) РІР‚вЂќ icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';

export interface RecipeIconWrapper
	extends StructIntersectAll<[SlotTheme, IIconSlot, HTMLAttributes<HTMLSpanElement>]> {}
