/**
 * ReturnPolicyContract вЂ” РїРѕР»РёС‚РёРєР° РІРѕР·РІСЂР°С‚Р° С‚РѕРІР°СЂР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotReturnCondition {
	id: string;
	title: string;
	description: string;
	appliesTo: string[];
	exceptions?: string[];
}
