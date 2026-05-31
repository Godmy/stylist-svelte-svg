/**
 * ProductComparisonContract вЂ” СЃСЂР°РІРЅРµРЅРёРµ С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeProductComparisonFeature extends StructIntersectAll<[]> {
	name: string;
	index: number;
}
