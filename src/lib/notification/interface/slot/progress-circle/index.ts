import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type {
	HtmlAttributesBase
} from '$stylist/information/interface/slot';

export interface SlotProgressCircle extends HtmlAttributesBase<HTMLDivElement> {
	value: number;
	max?: number;
	size?: number;
	strokeWidth?: number;
	label?: string;
	showPercentage?: boolean;
	variant?: TokenAppearance;
}
