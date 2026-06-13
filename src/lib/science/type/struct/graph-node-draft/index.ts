import type { ScienceGraphNodeCategory } from '$stylist/science/type/enum/graph-node-category';

export interface ScienceGraphNodeDraft {
	title: string;
	category: ScienceGraphNodeCategory;
	summary: string;
	color: string;
	accent: string;
	width: number;
	height: number;
	details: string;
}
