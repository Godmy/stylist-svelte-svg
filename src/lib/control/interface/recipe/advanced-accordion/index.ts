import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotAdvancedAccordion } from '$stylist/control/interface/slot/advanced-accordion';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeAdvancedAccordion
	extends StructIntersectAll<
		[
			SlotAdvancedAccordion,
			BehaviorSelectable<string[]>,
			BehaviorFocusable,
			BehaviorSizable,
			BehaviorScrollable,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
