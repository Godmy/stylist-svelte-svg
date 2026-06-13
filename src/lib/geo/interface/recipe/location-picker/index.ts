import type { LocationPickerRestProps as LegacyLocationPickerProps2 } from '$stylist/geo/type/struct/location-picker/locationpickerrest-props';
import type { LocationPickerProps as LegacyLocationPickerProps1 } from '$stylist/geo/type/struct/location-picker/locationpicker-props';
import type { SlotLocationPicker as Slot } from '$stylist/geo/interface/slot/location-picker';
import type { SlotLocationPicker as SlotLocationPicker } from '$stylist/geo/interface/slot/location-picker';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { LocationPickerProps } from '$stylist/geo/type/struct/location-picker/locationpicker-props';

export interface RecipeLocationPicker
	extends StructIntersectAll<
		[
			LegacyLocationPickerProps2,
			LegacyLocationPickerProps1,
			Slot,
			SlotLocationPicker,
			LocationPickerProps
		]
	> {}
