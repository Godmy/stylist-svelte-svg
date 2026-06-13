import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Idef0Connector РІР‚вЂќ Р С”Р С•Р Р…Р Р…Р ВµР С”РЎвЂљР С•РЎР‚ IDEF0..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeIdef0Connector
	extends StructIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLDivElement>]> {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	label: string;
	direction?: 'input' | 'output';
	showArrow?: boolean;
	color?: string;
}
