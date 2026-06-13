import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all'; /**
 * PortGroup РІР‚вЂќ Р С–РЎР‚РЎС“Р С—Р С—Р В° Р С—Р С•РЎР‚РЎвЂљР С•Р Р†..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 */
import type { TokenRelationship } from '$stylist/architecture/type/enum/relationship';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface RecipePortGroup
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	title?: string;
	direction?: TokenRelationship;
	portSize?: TokenSize;
	showLabels?: boolean;
	compact?: boolean;
	divider?: boolean;
}
