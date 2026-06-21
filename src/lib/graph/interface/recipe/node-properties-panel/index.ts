import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { LiteGraphNodeProperty } from '$stylist/graph/type/struct/lite-graph-node-property';

export interface RecipeNodePropertiesPanel
	extends ComputeIntersectAll<[SlotTheme, ChildrenProp, HTMLAttributes<HTMLElement>]> {
	nodeId?: string;
	title?: string;
	visible?: boolean;
	properties?: readonly LiteGraphNodeProperty[];
	size?: TokenSize;
	compact?: boolean;
	showHeader?: boolean;
	showClose?: boolean;
	editable?: boolean;
	groupByType?: boolean;
	onPropertyChange?: (propertyId: string, value: unknown) => void;
}
