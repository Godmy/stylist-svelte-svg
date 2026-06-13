import type { RestProps as LegacyDropZoneProps2 } from '$stylist/file/type/struct/drop-zone/props/rest-props';
import type { Props as LegacyDropZoneProps1 } from '$stylist/file/type/struct/drop-zone/props/-props';
import type { SlotDropZone as Slot } from '$stylist/file/interface/slot/drop-zone';
import type { SlotDropZone as SlotDropZone } from '$stylist/file/interface/slot/drop-zone';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorDropZoneEvents } from '$stylist/file/interface/behavior/drop-zone-events';

export interface RecipeDropZone
	extends StructIntersectAll<
		[
			LegacyDropZoneProps2,
			LegacyDropZoneProps1,
			Slot,
			SlotDropZone,
			BehaviorDropZoneEvents,
			SlotChildren
		]
	> {
	/** Children slot */
	/** Accepted file types */
	accept?: string;
	/** Multiple files allowed */
	multiple?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Maximum file size */
	maxSize?: number;
	/** Maximum items */
	maxItems?: number;
	/** Show preview */
	preview?: boolean;
	/** Label text */
	label?: string;
	/** Description text */
	description?: string;
	/** Additional CSS class */
	class?: string;
}
