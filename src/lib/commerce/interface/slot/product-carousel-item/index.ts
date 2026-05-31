/**
 * ProductCarouselContract вЂ” РєР°СЂСѓСЃРµР»СЊ С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotProductCarouselItem {
	title: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
}
