import type { RecipeThemeColorPalette } from '$stylist/color/interface/recipe/color-palette';

export class ObjectManagerColorPalette {
	static resolveColors(props: RecipeThemeColorPalette) {
		return props.colors ?? [];
	}

	static resolveTitle(props: RecipeThemeColorPalette): string {
		return props.title ?? 'Color Palette';
	}

	static resolveShowLabels(props: RecipeThemeColorPalette): boolean {
		return props.showLabels ?? true;
	}

	static resolveShowValues(props: RecipeThemeColorPalette): boolean {
		return props.showValues ?? false;
	}

	static resolveColumns(props: RecipeThemeColorPalette): number {
		return Math.max(1, Math.min(props.columns ?? 5, 6));
	}
}
