import { TOKEN_EASING } from '$stylist/animation/const/object/easing';
import { TOKEN_ANIMATION } from '$stylist/animation/const/object/animation';
import { TOKEN_DURATION } from '$stylist/animation/const/object/duration';
import { TOKEN_TRANSITION } from '$stylist/animation/const/record/transition';

export const INTERACTION_MOTION = {
	duration: TOKEN_DURATION,
	easing: TOKEN_EASING,
	transitions: TOKEN_TRANSITION,
	animations: TOKEN_ANIMATION
} as const;
