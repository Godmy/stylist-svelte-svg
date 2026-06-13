import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotProductTourStep } from '$stylist/commerce/interface/slot/product-tour-step';
import type { BehaviorProductTourEvents } from '$stylist/commerce/interface/behavior/product-tour-events';

export interface RecipeProductTour
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]>,
		BehaviorProductTourEvents {
	steps: SlotProductTourStep[];
	currentStep?: number;
	showTour?: boolean;
}
