import type { TokenEasing } from '$stylist/animation/type/enum/easing';

export interface BehaviorMotionPreset {
	duration?: number;
	easing?: TokenEasing;
	delay?: number;
	transitionProperty?: string;
	animateInfinite?: boolean;
	motionPreset?: string;
}
