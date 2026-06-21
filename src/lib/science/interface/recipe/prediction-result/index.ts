import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ContractPrediction } from '$stylist/science/interface/contract/prediction';
import type { PredictionResultStatus } from '$stylist/science/type/struct/prediction-result-status';

export interface RecipePredictionResult extends ComputeIntersectAll<[SlotChildren]> {
	title?: string;
	description?: string;
	predictions?: ContractPrediction[];
	actualValue?: number;
	predictedValue?: number;
	modelUsed?: string;
	confidence?: number;
	status?: PredictionResultStatus;
	onRetry?: () => void;
	showChart?: boolean;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	footerClass?: string;
}
