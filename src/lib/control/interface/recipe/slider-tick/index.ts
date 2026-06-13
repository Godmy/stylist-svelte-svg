import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * SliderTick РІР‚вЂќ Р СР ВµРЎвЂљР С”Р В° РЎРѓР В»Р В°Р в„–Р Т‘Р ВµРЎР‚Р В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeSliderTick
	extends StructIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLSpanElement>]> {}
