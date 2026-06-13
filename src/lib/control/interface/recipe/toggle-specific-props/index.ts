import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** РЎРїРµС†РёС„РёС‡РЅС‹Рµ СЃРІРѕР№СЃС‚РІР° РґР»СЏ СЂР°Р·Р»РёС‡РЅС‹С… С‚РёРїРѕРІ РїРµСЂРµРєР»СЋС‡Р°С‚РµР»РµР№ */
export interface ToggleSpecificProps extends StructIntersectAll<[]> {
	/** РўРёРї РїРµСЂРµРєР»СЋС‡Р°С‚РµР»СЏ */
	type?: 'toggle' | 'checkbox' | 'radio' | 'switch';

	/** Р”Р»СЏ SlotCheckbox: СЂР°Р·СЂРµС€РёС‚СЊ РјРЅРѕР¶РµСЃС‚РІРµРЅРЅС‹Р№ РІС‹Р±РѕСЂ */
	multiple?: boolean;

	/** Р”Р»СЏ SlotRadio: РёРјСЏ РіСЂСѓРїРїС‹ */
	groupName?: string;

	/** Р”Р»СЏ Switch: РѕРїРёСЃР°РЅРёРµ РїРѕРґ РїРµСЂРµРєР»СЋС‡Р°С‚РµР»РµРј */
	description?: string;
}
