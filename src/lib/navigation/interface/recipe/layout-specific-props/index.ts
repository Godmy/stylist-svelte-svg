import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** РЎРїРµС†РёС„РёС‡РЅС‹Рµ СЃРІРѕР№СЃС‚РІР° РґР»СЏ layout-РєРѕРјРїРѕРЅРµРЅС‚РѕРІ */
import type { Snippet } from 'svelte';

export interface LayoutSpecificProps extends StructIntersectAll<[SlotChildren]> {
	/** РўРёРї layout-РєРѕРјРїРѕРЅРµРЅС‚Р° */
	type?: 'sidebar' | 'overlay' | 'drag-drop' | 'transform' | 'container';

	/** РџРѕР·РёС†РёСЏ (РґР»СЏ sidebar) */
	position?: 'left' | 'right' | 'top' | 'bottom';

	/** РЁРёСЂРёРЅР° (РґР»СЏ sidebar) */
	width?: string | number;

	/** Р Р°Р·СЂРµС€РёС‚СЊ РїРµСЂРµС‚Р°СЃРєРёРІР°РЅРёРµ (РґР»СЏ drag-drop) */
	draggable?: boolean;

	/** Drop zone (РґР»СЏ drag-drop) */
	dropzone?: boolean;

	/** РўСЂР°РЅСЃС„РѕСЂРјР°С†РёРё (РґР»СЏ transform) */
	scale?: number;
	rotate?: number;

	/** children РєР°Рє Snippet */
}
