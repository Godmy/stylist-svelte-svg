import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Idef0Outputs Р Р†Р вЂљРІР‚Сњ Р В Р вЂ Р РЋРІР‚в„–Р РЋРІР‚В¦Р В РЎвЂўР В РўвЂР РЋРІР‚в„– IDEF0..
 *
 * LEGO-Р РЋР С“Р В РЎвЂўР РЋР С“Р РЋРІР‚С™Р В Р’В°Р В Р вЂ :
 *   ILabelSlot        (information) Р Р†Р вЂљРІР‚Сњ label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { Idef0Port } from '$stylist/science/type/struct/idef-zero/idef0port';

export interface RecipeIdef0Outputs
	extends StructIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLDivElement>]> {
	ports: Idef0Port[];
	boxY: number;
	boxHeight: number;
}
