import type { TokenSkeleton } from '$stylist/architecture/type/enum/skeleton';
import type {
	HtmlAttributesBase
} from '$stylist/information/interface/slot';

export interface SlotSkeleton extends HtmlAttributesBase<HTMLDivElement> {
	variant?: TokenSkeleton;
	width?: string | number;
	height?: string | number;
}
