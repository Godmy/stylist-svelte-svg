import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * IconChevron РІР‚вЂќ Р С‘Р С”Р С•Р Р…Р С”Р В° РЎв‚¬Р ВµР Р†РЎР‚Р С•Р Р…Р В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   IIconSlot        (information) РІР‚вЂќ icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';

export interface RecipeIconChevron
	extends StructIntersectAll<[SlotTheme, IIconSlot, HTMLAttributes<SVGSVGElement>]> {}
