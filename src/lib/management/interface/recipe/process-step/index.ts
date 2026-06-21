import type { SlotProcessStep as Slot } from '$stylist/management/interface/slot/process-step';
import type { SlotProcessStep as SlotProcessStep } from '$stylist/management/interface/slot/process-step';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotProcessStep as IProcessStepProps } from '$stylist/management/interface/slot/process-step';

export interface RecipeProcessStep
	extends ComputeIntersectAll<[Slot, SlotProcessStep, IProcessStepProps]> {}
