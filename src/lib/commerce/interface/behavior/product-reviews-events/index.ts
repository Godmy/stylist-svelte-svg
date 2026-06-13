import type { SlotAddReviewData } from '$stylist/commerce/interface/slot/add-review-data';

export interface BehaviorProductReviewsEvents {
	onAddReview?: (review: SlotAddReviewData) => void;
}
