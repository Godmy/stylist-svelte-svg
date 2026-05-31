/**
 * OrderTrackingContract вЂ” РѕС‚СЃР»РµР¶РёРІР°РЅРёРµ СЃС‚Р°С‚СѓСЃР° Р·Р°РєР°Р·Р°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface BehaviorOrderTrackingEvents {
	onContactCarrier?: () => void;
	onReportIssue?: () => void;
	onDeliveryReschedule?: () => void;
}
