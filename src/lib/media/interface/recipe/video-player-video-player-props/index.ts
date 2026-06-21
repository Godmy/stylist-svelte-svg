import type { HTMLVideoAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface VideoPlayerProps extends ComputeIntersectAll<[HTMLVideoAttributes]> {
	src?: string;
	poster?: string;
	title?: string;
	width?: string;
	height?: string;
	showControls?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	class?: string;
	videoClass?: string;
	controlsClass?: string;
}
