import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface VariablesEditorStateProps extends ComputeIntersectAll<[]> {
	variables?: Record<string, any>;
	height?: string;
	class?: string;
	onChange?: (variables: Record<string, any>) => void;
}
