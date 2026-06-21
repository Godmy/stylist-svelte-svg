import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ContractAvatar } from '$stylist/media/interface/contract/avatar';

export interface ContractAvatarGroup
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	/** List of avatars */
	avatars: ContractAvatar[];
	/** Maximum visible avatars */
	maxVisible?: number;
	/** Avatar size */
	size?: ContractAvatar['size'];
	/** Additional CSS class */
	class?: string;
}
