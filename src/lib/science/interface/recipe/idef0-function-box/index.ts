import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Idef0FunctionBox РІР‚вЂќ РЎвЂћРЎС“Р Р…Р С”РЎвЂ Р С‘Р С•Р Р…Р В°Р В»РЎРЉР Р…РЎвЂ№Р в„– Р В±Р В»Р С•Р С” IDEF0..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 *   ICaptionSlot        (information) РІР‚вЂќ caption (Caption)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeIdef0FunctionBox
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, HTMLAttributes<HTMLDivElement>]
	> {
	title?: string;
	subtitle?: string;
	x?: number;
	y?: number;
	width?: number;
	height?: number;
}
