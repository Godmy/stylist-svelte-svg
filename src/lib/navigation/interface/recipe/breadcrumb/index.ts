import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Breadcrumb РІР‚вЂќ РЎРЊР В»Р ВµР СР ВµР Р…РЎвЂљ Р Р…Р В°Р Р†Р С‘Р С–Р В°РЎвЂ Р С‘Р С•Р Р…Р Р…Р С•Р в„– РЎвЂ Р ВµР С—Р С•РЎвЂЎР С”Р С‘..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 *   IIconSlot        (information) РІР‚вЂќ icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeBreadcrumb
	extends StructIntersectAll<[SlotTheme, ILabelSlot, IIconSlot, HTMLAttributes<HTMLLinkElement>]> {}
