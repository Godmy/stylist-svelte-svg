import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorDraggable as IDraggable } from '$stylist/interaction/interface/behavior/draggable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorScrollable as IScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorTransformable as ITransformable } from '$stylist/animation/interface/behavior/transformable';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { LayoutSpecificProps } from '$stylist/navigation/interface/recipe/layout-specific-props';

/**
 * LayoutRecipe пїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅ layout-пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ.
 *
 * LEGO-пїЅпїЅпїЅпїЅпїЅпїЅ:
 *   ILabelSlot                (information) пїЅ label, title
 *   IIconSlot                 (information) пїЅ icon
 *   IClickable                (interaction) пїЅ onClick, onDismiss
 *   IDraggable                (interaction) пїЅ draggable, onDrag*, onDrop
 *   ITransformable            (interaction) пїЅ scale, rotate, translate
 *   IFocusable                (interaction) пїЅ tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) пїЅ size, density
 *   IScrollable               (architecture) пїЅ overflowX, overflowY
 *   ThemeAttributes           (theme)       пїЅ variant, tone
 *
 * пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ:
 *   - Sidebar: type='sidebar', пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅ
 *   - Overlay: type='overlay', пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅ
 *   - DragAndDrop: type='drag-drop', пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ
 *   - Transformation: type='transform', пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ
 *   - Container: type='container', пїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ
 */
export interface LayoutRecipe
	extends StructIntersectAll<
			[
				ILabelSlot,
				IIconSlot,
				IClickable,
				IDraggable,
				ITransformable,
				IFocusable,
				ISizable,
				IScrollable,
				ThemeAttributes<HTMLDivElement>
			]
		>,
		LayoutSpecificProps {}
