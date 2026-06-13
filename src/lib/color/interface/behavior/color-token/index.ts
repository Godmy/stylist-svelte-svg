import type { TokenColorTone } from '$stylist/color/type/enum/tone';

export interface BehaviorColorToken {
	variant?: string;
	tone?: TokenColorTone;
	gradient?: string;
	theme?: string;
}
