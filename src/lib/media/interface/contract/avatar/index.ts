import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { AvatarSize } from '$stylist/media/type/struct/avatar-size';
import type { TOKEN_AVAILABILITY } from '$stylist/interaction/const/enum/availability';

export interface ContractAvatar extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	/** Avatar variant */
	variant?: 'default';
	/** Avatar size */
	size?: AvatarSize;
	/** Image source */
	src?: string;
	/** Alt text */
	alt?: string;
	/** SlotUser ID */
	id?: string;
	/** SlotUser name */
	name?: string;
	/** SlotUser status */
	status?: (typeof TOKEN_AVAILABILITY)[number];
	/** Show status indicator */
	showStatus?: boolean;
	/** Additional CSS class */
	class?: string;
}
