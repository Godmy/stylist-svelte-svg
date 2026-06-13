import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface RecipeToggle
	extends StructIntersectAll<
		[
			SlotLabel,
			SlotCaption,
			SlotStatus,
			BehaviorSelectable<boolean>,
			BehaviorFocusable,
			BehaviorSized,
			BehaviorShapeable,
			BehaviorSpaced,
			SlotTheme,
			HTMLAttributes<HTMLInputElement>
		]
	> {
	size?: TokenSize;
	checked?: boolean;
	disabled?: boolean;
	ariaLabel?: string;
}
