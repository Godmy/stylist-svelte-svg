import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotZoomControls } from '$stylist/control/interface/slot/zoom-controls';
import type { ZoomSpecificProps } from '$stylist/control/interface/recipe/zoom-specific-props';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced } from '$stylist/layout/interface/behavior/spaced';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeZoomControls
	extends StructIntersectAll<
			[
				SlotZoomControls,
				SlotLabel,
				SlotIcon,
				BehaviorClickable,
				BehaviorFocusable,
				BehaviorSized,
				BehaviorShapeable,
				BehaviorSpaced,
				SlotTheme,
				HTMLAttributes<HTMLDivElement>
			]
		>,
		ZoomSpecificProps {}
