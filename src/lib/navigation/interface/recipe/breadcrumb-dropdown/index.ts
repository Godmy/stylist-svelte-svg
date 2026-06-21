import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export interface RecipeBreadcrumbDropdown
	extends ComputeIntersectAll<
		[SlotTheme, HTMLAttributes<HTMLDivElement>, InteractionHTMLAttributes<HTMLDivElement>]
	> {}
