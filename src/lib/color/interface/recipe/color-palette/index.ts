import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ColorPaletteProps as BaseColorPaletteProps } from '$stylist/input/type/struct/color-palette/color-palette-props';

export interface ThemeColorPaletteRecipe extends StructIntersectAll<[BaseColorPaletteProps]> {}
