import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotSentimentAnalysisResult } from '$stylist/science/interface/slot/sentiment-analysis-result';
import type { SentimentAnalysisStatus } from '$stylist/science/type/struct/sentiment-analysis-status';

export interface RecipeSentimentAnalysis extends StructIntersectAll<[SlotChildren]> {
	text?: string;
	result?: SlotSentimentAnalysisResult;
	onAnalyze?: (text: string) => void;
	status?: SentimentAnalysisStatus;
	errorMessage?: string;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	inputClass?: string;
	resultClass?: string;
	footerClass?: string;
}
