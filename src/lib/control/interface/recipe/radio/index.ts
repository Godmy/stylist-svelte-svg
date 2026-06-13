import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotRadio } from '$stylist/control/interface/slot/radio-toggles';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeRadio
	extends StructIntersectAll<[SlotRadio, InteractionHTMLAttributes<HTMLInputElement>]> {}
