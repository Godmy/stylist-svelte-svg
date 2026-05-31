import type {
	HtmlAttributesBase
} from '$stylist/information/interface/slot';

export interface SlotAccountProgressTracker extends HtmlAttributesBase<HTMLDivElement> {
	currentStep: number;
	totalSteps?: number;
	completedSteps?: number[];
	steps?: string[];
}
