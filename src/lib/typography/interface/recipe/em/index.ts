import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotInlineBase as InlineBaseProps } from '$stylist/typography/interface/slot/inline-base';

export interface ThemeEmRecipe extends StructIntersectAll<[InlineBaseProps<HTMLElement>]> {}
