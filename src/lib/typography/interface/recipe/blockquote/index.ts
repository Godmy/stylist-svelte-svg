import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Blockquote represents quoted content with optional cite metadata.
 *
 * Composition:
 *   ChildrenProp     quote content
 *   ThemeAttributes  host attributes
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';

export interface RecipeBlockquote
	extends StructIntersectAll<[SlotTheme, ChildrenProp, HTMLAttributes<HTMLQuoteElement>]> {
	cite?: string;
	citeUrl?: string;
	sourceLabel?: string;
	footerPrefix?: string;
	withBorder?: boolean;
	withBackground?: boolean;
}
