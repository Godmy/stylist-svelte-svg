import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * AccessibilityCheckbox РІР‚вЂќ РЎвЂЎР ВµР С”Р В±Р С•Р С”РЎРѓ Р Т‘Р С•РЎРѓРЎвЂљРЎС“Р С—Р Р…Р С•РЎРѓРЎвЂљР С‘..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 *   IStatusSlot        (information) РІР‚вЂќ status (Status)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeAccessibilityCheckbox
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, IStatusSlot, HTMLAttributes<HTMLInputElement>]
	> {}
