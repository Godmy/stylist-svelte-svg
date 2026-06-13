import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all'; /**
 * ChartPolyline РІР‚вЂќ Р С—Р С•Р В»Р С‘Р В»Р С‘Р Р…Р С‘РЎРЏ Р С–РЎР‚Р В°РЎвЂћР С‘Р С”Р В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:

 */
import type { ChartFunctionPoint } from '$stylist/chart/type/struct/chart-point';

export interface RecipeChartPolyline
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<SVGPolylineElement>]> {
	points?: ChartFunctionPoint[];
	width: number;
	height: number;
	xDomain?: [number, number];
	yDomain?: [number, number];
	color?: string;
	strokeWidth?: number;
}
