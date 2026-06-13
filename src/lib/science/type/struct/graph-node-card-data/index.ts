import type { RecipeGraphNodeCard } from '$stylist/science/interface/recipe/graph-node-card';

export type GraphNodeCardData = RecipeGraphNodeCard & {
	name: string;
	type: string;
	description?: string;
	fields?: { name: string; type: string; isRequired?: boolean }[];
};
