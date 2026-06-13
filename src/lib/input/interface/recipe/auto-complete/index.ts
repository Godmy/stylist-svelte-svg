import type { SlotAutoComplete as Slot } from '$stylist/input/interface/slot/auto-complete';
import type { SlotAutoComplete as SlotAutoComplete } from '$stylist/input/interface/slot/auto-complete';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * AutoComplete Р Р†Р вЂљРІР‚Сњ Р В Р’В°Р В Р вЂ Р РЋРІР‚С™Р В РЎвЂўР В РўвЂР В РЎвЂўР В РЎвЂ”Р В РЎвЂўР В Р’В»Р В Р вЂ¦Р В Р’ВµР В Р вЂ¦Р В РЎвЂР В Р’Вµ..
 *
 * LEGO-Р РЋР С“Р В РЎвЂўР РЋР С“Р РЋРІР‚С™Р В Р’В°Р В Р вЂ :
 *   ILabelSlot        (information) Р Р†Р вЂљРІР‚Сњ label (Label)
 *   ICaptionSlot        (information) Р Р†Р вЂљРІР‚Сњ caption (Caption)
 *   IIconSlot        (information) Р Р†Р вЂљРІР‚Сњ icon (Icon)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeAutoComplete
	extends StructIntersectAll<
		[
			Slot,
			SlotAutoComplete,
			SlotTheme,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			HTMLAttributes<HTMLInputElement>
		]
	> {}
