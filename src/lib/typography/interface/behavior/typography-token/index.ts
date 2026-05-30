import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenLineHeight } from '$stylist/architecture/type/enum/line-height';
import type { TokenLetterSpacing } from '$stylist/architecture/type/enum/letter-spacing';

/** Typography token settings: font, size, weight, spacing, and alignment. */
export interface BehaviorTypographyToken {
	/** Font size token. */
	fontSize?: TokenSize;
	/** Font weight token. */
	fontWeight?: 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'black';
	/** Font family token. */
	fontFamily?: 'sans' | 'serif' | 'mono' | 'display' | string;
	/** Line height token. */
	lineHeight?: TokenLineHeight;
	/** Letter spacing token. */
	letterSpacing?: TokenLetterSpacing;
	/** Text transform token. */
	textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	/** Text alignment token. */
	textAlign?: 'left' | 'center' | 'right' | 'justify';
	/** Limit text to a number of lines. */
	lineClamp?: number;
}
