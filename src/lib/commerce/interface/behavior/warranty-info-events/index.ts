/**
 * WarrantyInfoContract вЂ” РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РіР°СЂР°РЅС‚РёРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { SlotWarrantyClaim } from '$stylist/commerce/interface/slot/warranty-claim';

export interface BehaviorWarrantyInfoEvents {
	onClaimSubmit?: (claim: Omit<SlotWarrantyClaim, 'id' | 'date' | 'status'>) => void;
	onTermsClick?: () => void;
	onFileDownload?: () => void;
}
