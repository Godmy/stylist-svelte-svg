/**
 * PricingTableContract вЂ” С‚Р°Р±Р»РёС†Р° С‚Р°СЂРёС„РЅС‹С… РїР»Р°РЅРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotPricingPlan {
	name: string;
	price: string;
	period: string;
	features: string[];
	cta: string;
	highlighted?: boolean;
}
