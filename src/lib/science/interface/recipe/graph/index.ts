import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipeGraphEdge } from '$stylist/science/interface/recipe/graph-edge';
import type { RecipeGraphNode } from '$stylist/science/interface/recipe/graph-node';

export interface RecipeGraph
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<SVGSVGElement>]> {
	nodes?: RecipeGraphNode[];
	edges?: RecipeGraphEdge[];
	label?: string;
	badge?: string | number;
}
