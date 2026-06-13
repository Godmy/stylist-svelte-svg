import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all'; /**
 * SlotGraphNode РІР‚вЂќ РЎС“Р В·Р ВµР В» Р С–РЎР‚Р В°РЎвЂћР В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 *   IBadgeSlot        (information) РІР‚вЂќ badge (Badge)
 *   IStatusSlot        (information) РІР‚вЂќ status (Status)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface RecipeGraphNode
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	id: string;
	x: number;
	y: number;
	label?: string;
	type?: string;
	interactive?: boolean;
	size?: TokenSize;
	color?: string;
	selected?: boolean;
}
