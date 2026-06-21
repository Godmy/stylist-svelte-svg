import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotSearchBar as BaseSearchBarProps } from '$stylist/control/interface/slot/search-bar';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSearchBarProps
	extends ComputeIntersectAll<[BaseSearchBarProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
