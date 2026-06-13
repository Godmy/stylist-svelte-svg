import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** РЎРїРµС†РёС„РёС‡РЅС‹Рµ СЃРІРѕР№СЃС‚РІР° РґР»СЏ СЂР°Р·Р»РёС‡РЅС‹С… С‚РёРїРѕРІ СЃСЃС‹Р»РѕРє */
export interface LinkSpecificProps extends StructIntersectAll<[]> {
	/** РўРёРї СЃСЃС‹Р»РєРё */
	type?: 'link' | 'breadcrumb' | 'inline' | 'button';

	/** URL СЃСЃС‹Р»РєРё */
	href?: string;

	/** Р¦РµР»СЊ РѕС‚РєСЂС‹С‚РёСЏ */
	target?: '_blank' | '_self' | '_parent' | '_top';

	/** РђС‚СЂРёР±СѓС‚ rel (РґР»СЏ РІРЅРµС€РЅРёС… СЃСЃС‹Р»РѕРє) */
	rel?: string;

	/** Download Р°С‚СЂРёР±СѓС‚ */
	download?: string;
}
