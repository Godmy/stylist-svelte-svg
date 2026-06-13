import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all'; /**
 * SlotGraphEdge РІР‚вЂќ РЎР‚Р ВµР В±РЎР‚Р С• Р С–РЎР‚Р В°РЎвЂћР В°..
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot        (information) РІР‚вЂќ label (Label)
 */
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';

export interface RecipeGraphEdge
	extends StructIntersectAll<[SlotTheme, Omit<HTMLAttributes<SVGPathElement>, 'style'>]> {
	directed?: boolean;
	type?: TokenTrajectory;
	active?: boolean;
	style?: Record<string, string>;
}
