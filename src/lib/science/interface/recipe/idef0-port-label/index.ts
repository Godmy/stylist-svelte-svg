import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Idef0PortLabel РІР‚вЂќ Р СР ВµРЎвЂљР С”Р В° Р С—Р С•РЎР‚РЎвЂљР В° IDEF0..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeIdef0PortLabel
	extends StructIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLSpanElement>]> {
	text: string;
	x: number;
	y: number;
	anchor?: 'start' | 'middle' | 'end';
	color?: string;
	position?: 'left' | 'right' | 'top' | 'bottom';
}
