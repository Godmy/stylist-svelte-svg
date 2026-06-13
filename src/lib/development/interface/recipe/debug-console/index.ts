import type { DebugConsoleProps as LegacyDebugConsoleProps1 } from '$stylist/development/type/struct/debug-console-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipeDebugConsole
	extends StructIntersectAll<
		[LegacyDebugConsoleProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
