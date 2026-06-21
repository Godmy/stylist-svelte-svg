import type { SlotTranslationEditor as Slot } from '$stylist/localization/interface/slot/translation-editor';
import type { SlotTranslationEditor as SlotTranslationEditor } from '$stylist/localization/interface/slot/translation-editor';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotExtendedTranslationEditor as ExtendedTranslationEditorProps } from '$stylist/localization/interface/slot/extended-translation-editor';

export interface RecipeTranslationEditor
	extends ComputeIntersectAll<[Slot, SlotTranslationEditor, ExtendedTranslationEditorProps]> {
	class?: string;
}
