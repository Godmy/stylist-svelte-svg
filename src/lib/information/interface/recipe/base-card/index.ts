import type { BaseCardProps as LegacyBaseCardProps1 } from '$stylist/information/type/struct/base-card-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
/**
 * BaseCard Р Р†Р вЂљРІР‚Сњ Р РЋРЎвЂњР В Р вЂ¦Р В РЎвЂР В Р вЂ Р В Р’ВµР РЋР вЂљР РЋР С“Р В Р’В°Р В Р’В»Р РЋР Р‰Р В Р вЂ¦Р В Р’В°Р РЋР РЏ Р В РЎвЂќР В Р’В°Р РЋР вЂљР РЋРІР‚С™Р В РЎвЂўР РЋРІР‚РЋР В РЎвЂќР В Р’В°-Р В РЎвЂќР В РЎвЂўР В Р вЂ¦Р РЋРІР‚С™Р В Р’ВµР В РІвЂћвЂ“Р В Р вЂ¦Р В Р’ВµР РЋР вЂљ..
 *
 * LEGO-Р РЋР С“Р В РЎвЂўР РЋР С“Р РЋРІР‚С™Р В Р’В°Р В Р вЂ :
 *   ILabelSlot        (information) Р Р†Р вЂљРІР‚Сњ label (Label)
 *   ICaptionSlot        (information) Р Р†Р вЂљРІР‚Сњ caption (Caption)
 *   IMediaSlot        (information) Р Р†Р вЂљРІР‚Сњ media (Media)
 *   IBadgeSlot        (information) Р Р†Р вЂљРІР‚Сњ badge (Badge)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';

export interface RecipeBaseCard
	extends StructIntersectAll<
		[
			LegacyBaseCardProps1,
			SlotTheme,
			StructIntersectAll<
				[
					LegacyBaseCardProps1,
					ILabelSlot,
					ICaptionSlot,
					IMediaSlot,
					IBadgeSlot,
					HTMLAttributes<HTMLDivElement>
				]
			>,
			SlotChildren
		]
	> {
	title?: string;
	description?: string;
	variant?: string;
	size?: TokenSize;
	disabled?: boolean;
	headerClass?: string;
	bodyClass?: string;
}
