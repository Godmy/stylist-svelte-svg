/**
 * ProductReviewsContract вЂ” РѕС‚Р·С‹РІС‹ Рѕ С‚РѕРІР°СЂРµ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotReview {
	id: string;
	author: string;
	rating: number;
	title: string;
	content: string;
	date: string;
	verified?: boolean;
}
