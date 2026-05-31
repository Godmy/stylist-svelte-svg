/**
 * ProductWishlistContract вЂ” СЃРїРёСЃРѕРє Р¶РµР»Р°РЅРёР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface BehaviorProductWishlistEvents {
	onRemove?: (id: string) => void;
	onMoveToCart?: (id: string) => void;
}
