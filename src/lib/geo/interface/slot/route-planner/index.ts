/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { SlotRoutePlannerLocation } from '$stylist/geo/interface/slot/route-planner-location';
import type { SlotRouteOption } from '$stylist/geo/interface/slot/route-option';

export interface SlotRoutePlanner extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	startLocation?: SlotRoutePlannerLocation;
	endLocation?: SlotRoutePlannerLocation;
	waypoints?: SlotRoutePlannerLocation[];
	routeOptions?: SlotRouteOption[];
	selectedRoute?: string;
	showSearch?: boolean;
	showRouteOptions?: boolean;
	showDirections?: boolean;
	showMap?: boolean;
	showTravelMode?: boolean;
	travelModes?: ('driving' | 'walking' | 'cycling' | 'transit')[];
	class?: string;
	mapClass?: string;
	inputClass?: string;
	directionsClass?: string;
	optionClass?: string;
	onRouteCalculated?: (route: SlotRouteOption) => void;
	onRouteSelect?: (routeId: string) => void;
	onLocationChange?: (
		type: 'start' | 'end' | 'waypoint',
		location: SlotRoutePlannerLocation
	) => void;
	height?: string;
	width?: string;
}
