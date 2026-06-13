import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { RecipeBreadcrumbs } from '$stylist/navigation/interface/recipe/breadcrumbs';
import type { BreadcrumbItem } from '../breadcrumb-item';

export type BreadcrumbsProps = RecipeBreadcrumbs &
	InteractionHTMLAttributes<HTMLElement> & {
		crumbs?: BreadcrumbItem[];
		activeId?: string;
		onNavigate?: (id: string) => void;
	};
