import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * ToolbarSeparator вЂ” СЂР°Р·РґРµР»РёС‚РµР»СЊ С‚СѓР»Р±Р°СЂР°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:

 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeToolbarSeparator
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {}
