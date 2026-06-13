import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotAccordion } from '$stylist/control/interface/slot/accordion';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeAccordion
	extends StructIntersectAll<
		[
			SlotAccordion,
			BehaviorSelectable<string | string[]>,
			BehaviorFocusable,
			BehaviorSized,
			BehaviorShapeable,
			BehaviorSpaced,
			BehaviorScrollable,
			SlotTheme,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
