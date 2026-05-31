/**
 * OrderConfirmationContract вЂ” РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ Р·Р°РєР°Р·Р°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface RecipeOrderItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	variant?: string;
	thumbnail?: string;
}
