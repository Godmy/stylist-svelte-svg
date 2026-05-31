import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { SlotModelOption } from '$stylist/science/interface/slot/model-option';

export interface RecipeModelSelector extends StructIntersectAll<[]> {
	models?: SlotModelOption[];
	selectedModel?: string;
	onModelSelect?: (modelId: string) => void;
	showTags?: boolean;
	showCapabilities?: boolean;
	placeholder?: string;
	class?: string;
	dropdownClass?: string;
	modelItemClass?: string;
	headerClass?: string;
	children?: Snippet;
}
