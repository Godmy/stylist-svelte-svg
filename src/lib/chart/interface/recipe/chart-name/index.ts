import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/**
 * ChartName РІР‚вЂќ Р Р…Р В°Р В·Р Р†Р В°Р Р…Р С‘Р Вµ Р С–РЎР‚Р В°РЎвЂћР С‘Р С”Р В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 */

export interface RecipeChartName
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLHeadingElement>]> {
	label?: string;
	text?: string;
	x?: number;
	y?: number;
	color?: string;
}
