import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all'; /**
 * Dot РІР‚вЂќ РЎвЂљР С•РЎвЂЎР С”Р В°-Р С‘Р Р…Р Т‘Р С‘Р С”Р В°РЎвЂљР С•РЎР‚..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   IStatusSlot        (information) РІР‚вЂќ status (Status)
 *   IBadgeSlot        (information) РІР‚вЂќ badge (Badge)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface RecipeDot
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {
	color?: TokenAppearance;
	size?: TokenSize;
}
