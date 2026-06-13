import type { PlaygroundCanvasShellProps as LegacyPlaygroundCanvasShellProps1 } from '$stylist/playground/type/struct/playground-canvas-shell-props';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
export interface RecipePlaygroundCanvasShell
	extends StructIntersectAll<
		[
			LegacyPlaygroundCanvasShellProps1,
			Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>,
			SlotChildren
		]
	> {
	/** Content snippet */
	/** Additional CSS class */
	class?: string;
}
