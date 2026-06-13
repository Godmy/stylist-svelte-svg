import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** РЎРїРµС†РёС„РёС‡РЅС‹Рµ СЃРІРѕР№СЃС‚РІР° РґР»СЏ С‚Р°Р±Р»РёС† */
import type { Snippet } from 'svelte';

export interface TableSpecificProps extends StructIntersectAll<[SlotChildren]> {
	/** РўРёРї С‚Р°Р±Р»РёС†С‹ */
	type?: 'extended' | 'controls' | 'header' | 'data';

	/** РљРѕР»РѕРЅРєРё С‚Р°Р±Р»РёС†С‹ */
	columns?: Array<{ key: string; label: string; sortable?: boolean; icon?: string }>;

	/** Р”Р°РЅРЅС‹Рµ СЃС‚СЂРѕРє */
	data?: Array<Record<string, any>>;

	/** РЎРѕСЂС‚РёСЂРѕРІРєР° */
	sortBy?: string;
	sortDirection?: 'asc' | 'desc' | 'none';
	onSort?: (column: string, direction: 'asc' | 'desc') => void;

	/** РџР°РіРёРЅР°С†РёСЏ */
	pagination?: boolean;
	pageSize?: number;
	currentPage?: number;

	/** Р’С‹РґРµР»РµРЅРёРµ СЃС‚СЂРѕРє */
	selectableRows?: boolean;
	multiSelect?: boolean;

	/** children РєР°Рє Snippet */
}
