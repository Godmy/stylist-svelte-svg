import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBurgerMenu } from '$stylist/control/interface/slot/burger-menu';

export interface RecipeBurgerMenu
	extends StructIntersectAll<[SlotBurgerMenu, HTMLAttributes<HTMLButtonElement>]> {}
