import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundShellHeaderProps as LegacyPlaygroundShellHeaderProps1 } from '$stylist/playground/type/struct/playground-shell-header-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePlaygroundShellHeader
	extends ComputeIntersectAll<
		[LegacyPlaygroundShellHeaderProps1, Omit<HTMLAttributes<HTMLElement>, 'class'>, BehaviorBorderToken, BehaviorTypography]
	> {
	title?: string;
	showNavigation?: boolean;
	showSearch?: boolean;
	showThemeToggle?: boolean;
	showUserMenu?: boolean;
	navItems?: Array<{ label: string; href: string; active?: boolean }>;
	class?: string;
}
