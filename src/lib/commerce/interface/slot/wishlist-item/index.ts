/**
 * ProductWishlistContract вЂ” СЃРїРёСЃРѕРє Р¶РµР»Р°РЅРёР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotWishlistItem {
	id: string;
	title: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
}
