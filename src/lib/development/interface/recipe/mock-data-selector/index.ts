import type { MockDataSelectorProps as LegacyMockDataSelectorProps1 } from '$stylist/development/type/struct/mock-data-selector-props';
import type { SlotMockDataSelector as Slot } from '$stylist/development/interface/slot/mock-data-selector';
import type { SlotMockDataSelector as SlotMockDataSelector } from '$stylist/development/interface/slot/mock-data-selector';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipeMockDataSelector
	extends StructIntersectAll<
		[
			LegacyMockDataSelectorProps1,
			Slot,
			SlotMockDataSelector,
			Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>
		]
	> {
	/** Additional CSS class */
	class?: string;
}
