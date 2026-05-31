/**
 * WarrantyInfoContract вЂ” РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РіР°СЂР°РЅС‚РёРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotWarrantyClaim {
	id: string;
	date: Date;
	status: 'pending' | 'approved' | 'rejected' | 'resolved';
	issue: string;
	description?: string;
	resolution?: string;
	claimNumber: string;
}
