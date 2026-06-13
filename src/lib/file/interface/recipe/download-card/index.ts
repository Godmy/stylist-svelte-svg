import type { SlotDownloadCard as Slot } from '$stylist/file/interface/slot/download-card';
import type { SlotDownloadCard as SlotDownloadCard } from '$stylist/file/interface/slot/download-card';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ContractFileMetadata } from '$stylist/file/interface/contract/file-metadata';

export interface RecipeDownloadCard extends StructIntersectAll<[Slot, SlotDownloadCard]> {
	/** РњРµС‚Р°РґР°РЅРЅС‹Рµ С„Р°Р№Р»Р° */
	file: ContractFileMetadata;
	/** Р’Р°СЂРёР°РЅС‚ РѕС„РѕСЂРјР»РµРЅРёСЏ */
	variant?: TokenAppearance;
	/** URL РґР»СЏ СЃРєР°С‡РёРІР°РЅРёСЏ С„Р°Р№Р»Р° */
	downloadUrl: string;
	/** РђР»СЊС‚РµСЂРЅР°С‚РёРІРЅС‹Р№ С‚РµРєСЃС‚ РґР»СЏ РёРєРѕРЅРєРё С„Р°Р№Р»Р° */
	iconAlt?: string;
	/** РџРѕРєР°Р·С‹РІР°С‚СЊ Р»Рё РјРµС‚Р°РґР°РЅРЅС‹Рµ С„Р°Р№Р»Р° */
	showMetadata?: boolean;
	/** РџРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєР°СЏ РёРєРѕРЅРєР° РґР»СЏ С„Р°Р№Р»Р° */
	icon?: string;
	/** Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ CSS РєР»Р°СЃСЃС‹ */
	class?: string;
}
