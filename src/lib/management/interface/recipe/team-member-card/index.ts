import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTeamMemberCard as ITeamMemberCardProps } from '$stylist/management/interface/slot/team-member-card';

export interface TeamMemberCardStateProps extends ComputeIntersectAll<[ITeamMemberCardProps]> {
	class?: string;
}
