import { BURN_DOWN_CHART_DEFAULT_MARGINS } from '$stylist/management/const/map/burn-down-chart-default-margins';
import type { RecipeBurnDownChart } from '$stylist/management/interface/recipe/burn-down-chart';

import { getBurnDownMinMaxValues } from '$stylist/management/function/script/get-burn-down-min-max-values';
import { generateBurnDownIdealPath } from '$stylist/management/function/script/generate-burn-down-ideal-path';
import { generateBurnDownActualPath } from '$stylist/management/function/script/generate-burn-down-actual-path';
import { generateBurnDownXLabels } from '$stylist/management/function/script/generate-burn-down-x-labels';
import { generateBurnDownYLabels } from '$stylist/management/function/script/generate-burn-down-y-labels';

export function createBurnDownChartState(props: RecipeBurnDownChart) {
	// Props with defaults
	const data = $derived(props.data);
	const width = $derived(props.width ?? 600);
	const height = $derived(props.height ?? 400);
	const title = $derived(props.title ?? 'Burn Down Chart');

	// Computed
	const margins = BURN_DOWN_CHART_DEFAULT_MARGINS;
	const innerWidth = $derived(width - margins.left - margins.right);
	const innerHeight = $derived(height - margins.top - margins.bottom);

	const minMaxValues = $derived(getBurnDownMinMaxValues(data.points));
	const idealPath = $derived(
		generateBurnDownIdealPath(data.points, margins, innerWidth, innerHeight)
	);
	const actualPath = $derived(
		generateBurnDownActualPath(data.points, margins, innerWidth, innerHeight)
	);
	const xLabels = $derived(generateBurnDownXLabels(data.points, margins, innerWidth, height));
	const yLabels = $derived(generateBurnDownYLabels(data.points, margins, innerHeight, margins.top));

	// CSS classes

	return {
		get data() {
			return data;
		},
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get title() {
			return title;
		},
		get margins() {
			return margins;
		},
		get innerWidth() {
			return innerWidth;
		},
		get innerHeight() {
			return innerHeight;
		},
		get minMaxValues() {
			return minMaxValues;
		},
		get idealPath() {
			return idealPath;
		},
		get actualPath() {
			return actualPath;
		},
		get xLabels() {
			return xLabels;
		},
		get yLabels() {
			return yLabels;
		}
	};
}
