/**
 * OrderConfirmationContract вЂ” РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ Р·Р°РєР°Р·Р°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface BehaviorOrderConfirmationEvents {
	onDownloadInvoice?: () => void;
	onShareOrder?: () => void;
	onContinueShopping?: () => void;
	onTrackOrder?: () => void;
}
