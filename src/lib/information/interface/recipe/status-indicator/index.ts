import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all'; /**
 * StatusIndicator РІР‚вЂќ Р С‘Р Р…Р Т‘Р С‘Р С”Р В°РЎвЂљР С•РЎР‚ РЎРѓРЎвЂљР В°РЎвЂљРЎС“РЎРѓР В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   IStatusSlot        (information) РІР‚вЂќ status (Status)
 *   IBadgeSlot        (information) РІР‚вЂќ badge (Badge)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAvailability } from '$stylist/interaction/type/record/availability';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface RecipeStatusIndicator
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {
	status?: TokenAvailability;
	appearance?: TokenAppearance;
	label?: string;
	customColor?: string;
	size?: TokenSize;
	showLabel?: boolean;
	indicatorClass?: string;
	labelClass?: string;
}
