import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Idef0BlackBox РІР‚вЂќ РЎвЂЎРЎвЂРЎР‚Р Р…РЎвЂ№Р в„– РЎРЏРЎвЂ°Р С‘Р С” IDEF0..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeIdef0BlackBox
	extends StructIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLDivElement>]> {
	width?: number;
	height?: number;
	boxWidth?: number;
	boxHeight?: number;
}
