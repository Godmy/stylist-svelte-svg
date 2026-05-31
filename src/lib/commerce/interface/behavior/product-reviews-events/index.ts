/**
 * ProductReviewsContract вЂ” РѕС‚Р·С‹РІС‹ Рѕ С‚РѕРІР°СЂРµ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { SlotAddReviewData } from '$stylist/commerce/interface/slot/add-review-data';

export interface BehaviorProductReviewsEvents {
	onAddReview?: (review: SlotAddReviewData) => void;
}
