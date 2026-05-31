import type { SlotGraphEdge } from '$stylist/input/interface/slot/graph-edge';
import type { SlotGraphNode } from '$stylist/input/interface/slot/graph-node';

export interface SlotGraphVisualizationData {
	nodes: SlotGraphNode[];
	edges: SlotGraphEdge[];
}
