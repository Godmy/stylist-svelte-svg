import type { PlaygroundEnhancedExportPanelProps as LegacyPlaygroundEnhancedExportPanelProps1 } from '$stylist/playground/type/struct/playground-enhanced-export-panel-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundEnhancedExportPanel
	extends StructIntersectAll<
		[
			LegacyPlaygroundEnhancedExportPanelProps1,
			Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>
		]
	> {
	/** Additional CSS class */
	class?: string;
}
