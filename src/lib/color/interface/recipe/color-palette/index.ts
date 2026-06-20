import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ColorPaletteProps } from '$stylist/input/type/struct/color-palette/color-palette-props';

export interface RecipeThemeColorPalette extends StructIntersectAll<[ColorPaletteProps]> {}
