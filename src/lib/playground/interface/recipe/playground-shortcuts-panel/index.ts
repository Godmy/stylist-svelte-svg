import type { PlaygroundShortcutsPanelProps as LegacyPlaygroundShortcutsPanelProps1 } from '$stylist/playground/type/struct/playground-shortcuts-panel-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundShortcutsPanel
	extends StructIntersectAll<
		[LegacyPlaygroundShortcutsPanelProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
