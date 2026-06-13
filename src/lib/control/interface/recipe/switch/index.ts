import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotSwitch } from '$stylist/control/interface/slot/switch';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeSwitch
	extends StructIntersectAll<[SlotSwitch, InteractionHTMLAttributes<HTMLInputElement>]> {}
