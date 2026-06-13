import type { HTMLAttributes } from 'svelte/elements';
import type { ToolbarItem } from '../toolbar-item';

export type GeneralToolbarRecipe = HTMLAttributes<HTMLDivElement> & {
	toolbarItems?: ToolbarItem[];
	compact?: boolean;
	disabled?: boolean;
	class?: string;
};
