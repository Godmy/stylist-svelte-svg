import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all'; /**
 * PieChart РІР‚вЂќ Р С”РЎР‚РЎС“Р С–Р С•Р Р†Р В°РЎРЏ Р Т‘Р С‘Р В°Р С–РЎР‚Р В°Р СР СР В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 *   IBadgeSlot        (information) РІР‚вЂќ badge (Badge)
 */
import type { PieChartDataPoint } from '$stylist/chart/type/struct/pie-chart';

export interface RecipePieChart
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<SVGSVGElement>]> {
	label?: string;
	badge?: string | number;
	data?: readonly PieChartDataPoint[];
	width?: number;
	height?: number;
	colors?: readonly string[];
}
