/**
 * WarrantyInfoContract вЂ” РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РіР°СЂР°РЅС‚РёРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { WarrantyPeriodType } from '$stylist/commerce/type/struct/warranty-period-type';

export interface SlotWarrantyPeriod {
	type: WarrantyPeriodType;
	duration: number;
	description?: string;
	coverage?: string[];
	exclusions?: string[];
}
