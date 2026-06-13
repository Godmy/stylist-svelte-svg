import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractPrediction } from '$stylist/science/interface/contract/prediction';
import type { PredictionResultStatus } from '$stylist/science/type/struct/prediction-result-status';

export interface RecipePredictionResult extends StructIntersectAll<[SlotChildren]> {
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
