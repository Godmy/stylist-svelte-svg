/** Serializable payload for a single metric distribution row. */
export type MetricBarData = {
	label: string;
	value: number;
	valueLabel?: string | number;
	percentage?: number;
	color?: string;
};
