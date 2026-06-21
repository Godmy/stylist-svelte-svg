import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface PromoBannerProps extends ComputeIntersectAll<[]> {
	title?: string;
	description?: string;
	cta?: string;
	link?: string;
	image?: string;
	variant?: string;
	onCtaClick?: () => void;
	class?: string;
}
