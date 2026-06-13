import type { TokenDuration } from '$stylist/animation/type/enum/duration';
import type { TokenEasing } from '$stylist/animation/type/enum/easing';

export interface AnimateValueOptions {
	from: number;
	to: number;
	duration: TokenDuration;
	delay: number;
	easing: TokenEasing;
	onUpdate: (value: number) => void;
	onFinish?: () => void;
}
