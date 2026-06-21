import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ContractAvatar } from '$stylist/media/interface/contract/avatar';

export interface ContractTeamAvatarStack
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	/** List of team members */
	members: ContractAvatar[];
	/** Maximum visible avatars */
	maxVisible?: number;
	/** Additional CSS class */
	class?: string;
}
