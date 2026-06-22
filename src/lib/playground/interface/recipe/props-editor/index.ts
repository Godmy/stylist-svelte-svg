import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { PropDefinition } from '$stylist/playground/type/struct/prop-definition';

export interface RecipePropsEditor
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLDivElement>]> {
	class?: string;
	propDefinitions?: PropDefinition[];
	propValues?: Record<string, unknown>;
	onPropChange?: (name: string, value: unknown) => void;
}
