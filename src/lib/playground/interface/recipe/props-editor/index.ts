import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { PropDefinition } from '$stylist/playground/type/struct/prop-definition';

export interface RecipePropsEditor
	extends StructIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLDivElement>]> {
	class?: string;
	propDefinitions?: PropDefinition[];
	propValues?: Record<string, unknown>;
	onPropChange?: (name: string, value: unknown) => void;
}
