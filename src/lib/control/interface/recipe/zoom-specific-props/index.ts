import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** РЎРїРµС†РёС„РёС‡РЅС‹Рµ СЃРІРѕР№СЃС‚РІР° РґР»СЏ Р·СѓРј-РєРѕРЅС‚СЂРѕР»РѕРІ */
import type { Snippet } from 'svelte';

export interface ZoomSpecificProps extends StructIntersectAll<[SlotChildren]> {
	/** РўРёРї Р·СѓРј-РєРѕРЅС‚СЂРѕР»Р° */
	type?: 'controls' | 'toolbar';

	/** РўРµРєСѓС‰РёР№ СѓСЂРѕРІРµРЅСЊ Р·СѓРјР° */
	zoom?: number;

	/** РњРёРЅРёРјР°Р»СЊРЅС‹Р№ Р·СѓРј */
	minZoom?: number;

	/** РњР°РєСЃРёРјР°Р»СЊРЅС‹Р№ Р·СѓРј */
	maxZoom?: number;

	/** РЁР°Рі Р·СѓРјР° */
	zoomStep?: number;

	/** РћР±СЂР°Р±РѕС‚С‡РёРє Р·СѓРјР° */
	onZoom?: (zoom: number) => void;

	/** РћР±СЂР°Р±РѕС‚С‡РёРє Р·СѓРјР° РІ */
	onZoomIn?: () => void;

	/** РћР±СЂР°Р±РѕС‚С‡РёРє Р·СѓРјР° out */
	onZoomOut?: () => void;

	/** РћР±СЂР°Р±РѕС‚С‡РёРє fit to screen */
	onFit?: () => void;

	/** children РєР°Рє Snippet */
}
