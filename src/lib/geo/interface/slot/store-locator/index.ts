/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { SlotStore } from '$stylist/geo/interface/slot/store';

export interface SlotStoreLocator extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	stores: SlotStore[];
	showSearch?: boolean;
	showFilters?: boolean;
	showDistance?: boolean;
	showRating?: boolean;
	showHours?: boolean;
	showServices?: boolean;
	enablePickupFilter?: boolean;
	enableServiceFilter?: boolean;
	maxStores?: number;
	radius?: number;
	showMap?: boolean;
	onStoreSelect?: (store: SlotStore) => void;
	onGetDirections?: (store: SlotStore) => void;
	onCallStore?: (store: SlotStore) => void;
	class?: string;
	headerClass?: string;
	searchClass?: string;
	storeClass?: string;
	mapClass?: string;
	filterClass?: string;
}
