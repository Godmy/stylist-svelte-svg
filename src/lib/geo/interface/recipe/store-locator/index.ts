import type { StoreLocatorRestProps as LegacyStoreLocatorProps2 } from '$stylist/geo/type/struct/store-locator/storelocatorrest-props';
import type { StoreLocatorProps as LegacyStoreLocatorProps1 } from '$stylist/geo/type/struct/store-locator/storelocator-props';
import type { SlotStoreLocator as Slot } from '$stylist/geo/interface/slot/store-locator';
import type { SlotStoreLocator as SlotStoreLocator } from '$stylist/geo/interface/slot/store-locator';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { StoreLocatorProps } from '$stylist/geo/type/struct/store-locator/storelocator-props';

export interface RecipeStoreLocator
	extends ComputeIntersectAll<
		[LegacyStoreLocatorProps2, LegacyStoreLocatorProps1, Slot, SlotStoreLocator, StoreLocatorProps]
	> {}
