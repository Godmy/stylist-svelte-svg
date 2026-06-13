import { resolveAuthGuardState } from '$stylist/chat/function/script/resolve-auth-guard-state';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { AuthGuardProps } from '$stylist/chat/type/alias/auth-guard-props';

export const createAuthGuardState = (props: AuthGuardProps) => {
	const isAuthenticated = $derived(props.isAuthenticated ?? false);
	const requiredRole = $derived(props.requiredRole);
	const allowedRoles = $derived(props.allowedRoles ?? []);
	const userRoles = $derived(props.userRoles ?? []);
	const redirectUrl = $derived(props.redirectUrl ?? '/login');
	const showLoadingState = $derived(props.showLoadingState ?? false);

	const loading = $derived(showLoadingState);
	const rootClasses = $derived(mergeClassNames('c-auth-guard', props.class ?? ''));
	const sectionClasses = $derived(
		mergeClassNames(
			'flex flex-col items-center justify-center gap-[--spacing-sm] rounded-[1.5rem] border border-[--color-border-primary] bg-[--color-background-primary] px-6 py-7 text-center shadow-custom28',
			props.fallbackClass ?? ''
		)
	);
	const titleClasses = $derived(
		mergeClassNames(
			'text-lg font-semibold tracking-[0.01em] text-[--color-text-primary]',
			props.contentClass ?? ''
		)
	);
	const textClasses = $derived(
		mergeClassNames(
			'max-w-[40ch] text-sm leading-6 text-[--color-text-secondary]',
			props.contentClass ?? ''
		)
	);
	const actionLinkClasses = $derived(
		'inline-flex items-center rounded-full bg-[--color-primary-600] px-4 py-2 text-sm font-medium text-[--color-text-inverse] transition-colors hover:bg-[--color-primary-700]'
	);

	const resolved = $derived(
		resolveAuthGuardState({
			isAuthenticated,
			requiredRole,
			allowedRoles,
			userRoles
		})
	);

	return {
		get loading() {
			return loading;
		},
		get rootClasses() {
			return rootClasses;
		},
		get sectionClasses() {
			return sectionClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get textClasses() {
			return textClasses;
		},
		get actionLinkClasses() {
			return actionLinkClasses;
		},
		get resolved() {
			return resolved;
		},
		get redirectUrl() {
			return redirectUrl;
		},
		get showLoadingState() {
			return showLoadingState;
		}
	};
};

export default createAuthGuardState;
