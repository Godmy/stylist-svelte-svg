import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeSceneCameraControl
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLElement>]> {
	radius: number;
	minRadius: number;
	maxRadius: number;
	sceneFitRadius: number;
	targetX: number;
	targetY: number;
	onradiuschange?: (radius: number) => void;
	ontargetchange?: (x: number, y: number) => void;
}
