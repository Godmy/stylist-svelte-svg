import type { Snippet } from 'svelte';
import type { TokenAnimation } from '$stylist/animation/type/enum/animation';
import type { TokenDuration } from '$stylist/animation/type/enum/duration';
import type { TokenEasing } from '$stylist/animation/type/enum/easing';

export interface SlotAnimate {
	animation?: TokenAnimation;
	duration?: TokenDuration;
	easing?: TokenEasing;
	delay?: number;
	infinite?: boolean;
	direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
	iterations?: number | 'infinite';
	from?: number;
	to?: number;
	format?: (value: number) => string;
	children?: Snippet;
	class?: string;
}
