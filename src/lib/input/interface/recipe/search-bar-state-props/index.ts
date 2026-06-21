import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface SearchBarStateProps extends ComputeIntersectAll<[]> {
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	debounceMs?: number;
	class?: string;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
	onSearch?: (value: string) => void;
	onClear?: () => void;
}
