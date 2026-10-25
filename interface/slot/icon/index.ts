import type { TokenIconName } from '$stylist/svg/type/alias/icon-name';
import type { TokenIconSize } from '$stylist/svg/type/alias/icon-size';
export interface SlotIcon {
	icon?: TokenIconName;
	iconLeft?: TokenIconName;
	iconRight?: TokenIconName;
	iconSize?: TokenIconSize;
}
