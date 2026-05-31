/**
 * ProductTourContract вЂ” РёРЅС‚РµСЂР°РєС‚РёРІРЅС‹Р№ С‚СѓСЂ РїРѕ РїСЂРѕРґСѓРєС‚Сѓ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotProductTourStep {
	title: string;
	content: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
}
