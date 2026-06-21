import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeProductDemo
	extends ComputeIntersectAll<[SlotTheme, SlotLabel, SlotCaption, HTMLAttributes<HTMLDivElement>]> {
	demoContent: Snippet;
	features?: string[];
	onDemo?: () => void;
}
