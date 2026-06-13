import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Breadcrumbs РІР‚вЂќ Р Р…Р В°Р Р†Р С‘Р С–Р В°РЎвЂ Р С‘Р С•Р Р…Р Р…Р В°РЎРЏ РЎвЂ Р ВµР С—Р С•РЎвЂЎР С”Р В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 *   IIconSlot        (information) РІР‚вЂќ icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeBreadcrumbs
	extends StructIntersectAll<[SlotTheme, ILabelSlot, IIconSlot, HTMLAttributes<HTMLElement>]> {}
