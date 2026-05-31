/**
 * OrderTrackingContract вЂ” РѕС‚СЃР»РµР¶РёРІР°РЅРёРµ СЃС‚Р°С‚СѓСЃР° Р·Р°РєР°Р·Р°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { TrackingStatusType } from '$stylist/commerce/type/struct/tracking-status-type';

export interface SlotTrackingEvent {
	id: string;
	status: TrackingStatusType;
	timestamp: Date;
	location?: string;
	description: string;
	notes?: string;
}
