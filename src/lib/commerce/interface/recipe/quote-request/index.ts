import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { QuoteRequestValue } from '$stylist/input/type/struct/interaction-input/quote-request-value';

export interface RecipeQuoteRequest
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	title?: string;
	description?: string;
	formClass?: string;
	sectionClass?: string;
	inputClass?: string;
	buttonClass?: string;
	showCompanyFields?: boolean;
	showShippingFields?: boolean;
	showUrgentOption?: boolean;
	showValidUntil?: boolean;
	onSubmit?: (data: QuoteRequestValue) => void;
	onCancel?: () => void;
}
