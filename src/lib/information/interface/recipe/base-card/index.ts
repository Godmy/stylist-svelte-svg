import type { BaseCardProps as LegacyBaseCardProps1 } from '$stylist/information/type/struct/base-card-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';

export interface RecipeBaseCard
	extends ComputeIntersectAll<
		[
			LegacyBaseCardProps1,
			SlotTheme,
			ComputeIntersectAll<
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
