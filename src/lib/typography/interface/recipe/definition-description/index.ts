import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotInlineBase as InlineBaseProps } from '$stylist/typography/interface/slot/inline-base';

export interface ThemeDefinitionDescriptionRecipe
	extends StructIntersectAll<[InlineBaseProps<HTMLElement>]> {}
