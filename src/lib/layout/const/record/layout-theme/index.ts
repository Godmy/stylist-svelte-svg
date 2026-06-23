import { RECORD_BORDER_RADIUS } from '$stylist/layout/const/record/border-radius';
import { RECORD_ELEVATION } from '$stylist/layout/const/record/elevation';
import { TOKEN_OPACITY } from '$stylist/architecture/const/map/opacity';
import { RECORD_SPACING } from '$stylist/layout/const/record/spacing';
import { TOKEN_Z_INDEX } from '$stylist/layout/const/map/z-index';
import type { LayoutTheme } from '$stylist/layout/type/struct/layout-theme';

export const LAYOUT_THEME: LayoutTheme = {
	opacity: TOKEN_OPACITY,
	spacing: RECORD_SPACING,
	borderRadius: RECORD_BORDER_RADIUS,
	zIndex: TOKEN_Z_INDEX,
	boxShadow: RECORD_ELEVATION
};
