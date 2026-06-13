import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ListItemMarkerType } from '$stylist/information/type/enum/list-item-marker-type';

export interface RecipeListItemMarker
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {
	type?: ListItemMarkerType;
	value?: string | number;
	color?: TokenAppearance;
	size?: TokenSize;
}
