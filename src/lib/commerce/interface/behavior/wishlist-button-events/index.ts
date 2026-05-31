/**
 * WishlistButtonContract вЂ” РєРЅРѕРїРєР° РґРѕР±Р°РІР»РµРЅРёСЏ РІ РІРёС€Р»РёСЃС‚.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IClickable        (interaction) вЂ” disabled, loading, onClick
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */

export interface BehaviorWishlistButtonEvents {
	onToggle?: (inWishlist: boolean) => void;
	onSuccess?: () => void;
	onError?: (error: string) => void;
}
