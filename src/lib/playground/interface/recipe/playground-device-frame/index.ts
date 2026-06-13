import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { PlaygroundDeviceFrameViewportSize } from '$stylist/playground/type/struct/playground-device-frame-viewport-size';

export interface RecipePlaygroundDeviceFrame
	extends StructIntersectAll<
		[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>, SlotChildren]
	> {
	device?: PlaygroundDeviceFrameViewportSize;
	orientation?: 'portrait' | 'landscape';
	class?: string;
}
