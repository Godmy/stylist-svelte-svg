import type { ScienceGraphNodeCategory } from '$stylist/science/type/enum/graph-node-category';

export interface ScienceGraphWorkspaceNode {
	id: string;
	title: string;
	category: ScienceGraphNodeCategory;
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
	accent: string;
	summary: string;
	details: readonly string[];
	shape: 'rounded' | 'pill' | 'circle';
}
