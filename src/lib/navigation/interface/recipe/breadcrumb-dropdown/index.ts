import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export interface RecipeBreadcrumbDropdown
	extends StructIntersectAll<
		[SlotTheme, HTMLAttributes<HTMLDivElement>, InteractionHTMLAttributes<HTMLDivElement>]
	> {}
