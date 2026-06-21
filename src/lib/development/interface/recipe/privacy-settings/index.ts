import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotPrivacySettings } from '$stylist/development/interface/slot/privacy-settings';

export interface RecipePrivacySettings extends ComputeIntersectAll<[SlotPrivacySettings]> {}
