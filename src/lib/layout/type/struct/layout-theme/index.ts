import type { RecordBorderRadius } from '$stylist/layout/type/record/border-radius';
import type { RecordElevation } from '$stylist/layout/type/record/elevation';
import type { TOKEN_OPACITY } from '$stylist/architecture/const/map/opacity';
import type { RecordSpacing } from '$stylist/layout/type/record/spacing';
import type { RecordZIndex } from '$stylist/layout/type/record/z-index';

export type LayoutTheme = {
	opacity: typeof TOKEN_OPACITY;
	spacing: RecordSpacing;
	borderRadius: RecordBorderRadius;
	zIndex: RecordZIndex;
	boxShadow: RecordElevation;
};
