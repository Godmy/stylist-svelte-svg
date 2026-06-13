import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { StatusItem } from '$stylist/management/type/struct/status-item';

/** StatusDashboard = label + caption + size/layout + status items. */
export interface RecipeStatusDashboard
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, ISizable, HTMLAttributes<HTMLDivElement>]
	> {
	items: StatusItem[];
	layout?: TokenOrientation;
	itemClass?: string;
	headerClass?: string;
	variant?: 'default' | 'compact' | 'minimal';
}
