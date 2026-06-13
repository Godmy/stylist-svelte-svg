import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DrawerPosition } from '../drawerposition';

export type DrawerProps = HTMLAttributes<HTMLDivElement> & {
	open?: boolean;
	position?: DrawerPosition;
	size?: string;
	closable?: boolean;
	showBackdrop?: boolean;
	class?: string;
	header?: Snippet;
	actions?: Snippet;
	children?: Snippet;
};
