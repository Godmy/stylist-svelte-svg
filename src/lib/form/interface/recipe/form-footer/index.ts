import type { SlotFormFooter as Slot } from '$stylist/form/interface/slot/form-footer';
import type { SlotFormFooter as SlotFormFooter } from '$stylist/form/interface/slot/form-footer';
/**
 * Form Footer РІР‚вЂќ Р Р…Р С‘Р В¶Р Р…РЎРЏРЎРЏ РЎвЂЎР В°РЎРѓРЎвЂљРЎРЉ РЎвЂћР С•РЎР‚Р СРЎвЂ№.
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipeFormFooter
	extends StructIntersectAll<[Slot, SlotFormFooter, IClickable, IFocusable, ISizable]> {}
