/**
 * ProductSearchContract вЂ” РїРѕРёСЃРє РїРѕ С‚РѕРІР°СЂР°Рј.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” placeholder (РїРѕРґСЃРєР°Р·РєР° РІ РїРѕР»Рµ РїРѕРёСЃРєР°)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */

export interface BehaviorProductSearchEvents {
	onSearch?: (query: string) => void;
	onSuggestionSelect?: (suggestion: string) => void;
}
