/**
 * PriceMatchContract вЂ” Р±Р»РѕРє СЃСЂР°РІРЅРµРЅРёСЏ С†РµРЅ СЃ РєРѕРЅРєСѓСЂРµРЅС‚Р°РјРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeCompetitorPrice extends StructIntersectAll<[]> {
	name: string;
	price: number;
	url?: string;
}
