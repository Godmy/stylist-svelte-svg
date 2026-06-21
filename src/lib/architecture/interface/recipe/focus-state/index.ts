import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { FocusTarget } from '$stylist/architecture/interface/slot/focus-target/index';

export interface FocusState extends ComputeIntersectAll<[]> {
	target: FocusTarget | null;
	isFocused: boolean;
	isFullscreen: boolean;
}
