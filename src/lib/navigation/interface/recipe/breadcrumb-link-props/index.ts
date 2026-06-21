import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotLink as BaseBreadcrumbLinkProps } from '$stylist/typography/interface/slot/link';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeBreadcrumbLinkProps
	extends ComputeIntersectAll<
		[BaseBreadcrumbLinkProps, InteractionHTMLAttributes<HTMLAnchorElement>]
	> {}
