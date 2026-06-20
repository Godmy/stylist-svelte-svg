import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot/html-attributes-with-children';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TokenTypographyTone } from '$stylist/typography/type/enum/tone';

export interface RecipeText extends HtmlAttributesWithChildren<HTMLElement>, BehaviorTypography {
	text?: string;
	tone?: TokenTypographyTone;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
}
