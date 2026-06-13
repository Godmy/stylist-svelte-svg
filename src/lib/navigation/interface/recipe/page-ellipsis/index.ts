import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * PageEllipsis вЂ” РјРЅРѕРіРѕС‚РѕС‡РёРµ СЃС‚СЂР°РЅРёС†С‹..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:

 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipePageEllipsis
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {}
