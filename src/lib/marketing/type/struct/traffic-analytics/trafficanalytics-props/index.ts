import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TimeRange } from '../timerange';
import type { TrafficDataPoint } from '../trafficdatapoint';
import type { TrafficSource } from '../trafficsource';

export type TrafficAnalyticsProps = {
	title?: string;
	subtitle?: string;
	totalVisitors: number;
	uniqueVisitors: number;
	pageViews: number;
	timeOnPage: string;
	bounceRate: number;
	trafficSources: TrafficSource[];
	trafficData: TrafficDataPoint[];
	timeRange?: TimeRange;
	onTimeRangeChange?: (range: TimeRange) => void;
	class?: string;
	headerClass?: string;
	summaryClass?: string;
	chartClass?: string;
	sourcesClass?: string;
} & HTMLAttributes<HTMLDivElement> & BehaviorBorderToken & BehaviorTypography;
