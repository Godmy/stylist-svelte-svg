import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export const HEATMAP_GRADIENT_BY_SCHEME: Record<TokenThemeScheme, string> = {
	sunset: 'var(--gradient-sunset)',
	forest: 'var(--gradient-forest)',
	ocean: 'var(--gradient-ocean)',
	minimal: 'var(--gradient-info)'
};
