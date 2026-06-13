import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * MediaItem Р Р†Р вЂљРІР‚Сњ Р В РЎвЂР В Р’В·Р В РЎвЂўР В Р’В±Р РЋР вЂљР В Р’В°Р В Р’В¶Р В Р’ВµР В Р вЂ¦Р В РЎвЂР В Р’Вµ / Р В Р вЂ Р В РЎвЂР В РўвЂР В Р’ВµР В РЎвЂў-Р В РЎвЂ”Р РЋР вЂљР В Р’ВµР В Р вЂ Р РЋР Р‰Р РЋР вЂ№ / Р В РЎВР В Р’ВµР В РўвЂР В РЎвЂР В Р’В°-Р В РЎвЂ”Р В Р’В»Р В РЎвЂР РЋРІР‚С™Р В РЎвЂќР В Р’В°.
 *
 * LEGO-Р РЋР С“Р В РЎвЂўР РЋР С“Р РЋРІР‚С™Р В Р’В°Р В Р вЂ :
 *   IMediaSlot        (information) Р Р†Р вЂљРІР‚Сњ src, alt, thumbnail, srcSet, loading
 *   ILabelSlot        (information) Р Р†Р вЂљРІР‚Сњ label (Р В РЎвЂ”Р В РЎвЂўР В РўвЂР В РЎвЂ”Р В РЎвЂР РЋР С“Р РЋР Р‰ Р В РЎвЂ”Р В РЎвЂўР В РўвЂ Р В РЎВР В Р’ВµР В РўвЂР В РЎвЂР В Р’В°)
 *   ICaptionSlot      (information) Р Р†Р вЂљРІР‚Сњ caption, description
 *   IClickable        (interaction) Р Р†Р вЂљРІР‚Сњ onClick (Р В РЎвЂўР РЋРІР‚С™Р В РЎвЂќР РЋР вЂљР РЋРІР‚в„–Р РЋРІР‚С™Р РЋР Р‰ Р В Р вЂ  Р В Р’В»Р В Р’В°Р В РІвЂћвЂ“Р РЋРІР‚С™Р В Р’В±Р В РЎвЂўР В РЎвЂќР РЋР С“Р В Р’Вµ)
 *   ISizable          (architecture) Р Р†Р вЂљРІР‚Сњ size, shape
 *   IElevatable       (architecture) Р Р†Р вЂљРІР‚Сњ layoutElevation (Р В РЎвЂќР В Р’В°Р РЋР вЂљР РЋРІР‚С™Р В РЎвЂўР РЋРІР‚РЋР В РЎвЂќР В Р’В° Р РЋР С“ Р РЋРІР‚С™Р В Р’ВµР В Р вЂ¦Р РЋР Р‰Р РЋР вЂ№)
 *   IMotionToken      (theme)       Р Р†Р вЂљРІР‚Сњ duration, easing (fade-in Р В РЎвЂ”Р РЋР вЂљР В РЎвЂ Р В Р’В·Р В Р’В°Р В РЎвЂ“Р РЋР вЂљР РЋРЎвЂњР В Р’В·Р В РЎвЂќР В Р’Вµ)
 *   ThemeAttributes   (theme)       Р Р†Р вЂљРІР‚Сњ data-variant
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorMotionPreset as IMotionToken } from '$stylist/animation/interface/behavior/motion-preset';

export interface RecipeMediaItem
	extends StructIntersectAll<
		[
			SlotTheme,
			IMediaSlot,
			ILabelSlot,
			ICaptionSlot,
			IClickable,
			ISizable,
			IElevatable,
			IMotionToken,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
