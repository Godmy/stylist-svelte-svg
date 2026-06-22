import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';
import type { CanvasUser } from '$stylist/canvas/type/struct/canvas-user';

export interface SlotSharedCanvas extends LayoutHTMLAttributes<HTMLDivElement> {
	width?: number;
	height?: number;
	objects?: CanvasObject[];
	users?: CanvasUser[];
	currentUserId?: string;
	currentUser?: CanvasUser;
	onObjectAdd?: (obj: CanvasObject) => void;
	onObjectUpdate?: (obj: CanvasObject) => void;
	onObjectDelete?: (id: string) => void;
	showUsers?: boolean;
	showToolbar?: boolean;
	toolbarClass?: string;
	canvasClass?: string;
	variant?: 'default' | 'minimal';
	size?: TokenSize;
}
