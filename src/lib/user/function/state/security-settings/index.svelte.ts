import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeSecuritySettings } from '$stylist/user/interface/recipe/security-settings';

export function createSecuritySettingsState(props: RecipeSecuritySettings) {
	const twoFactor = $derived(props.twoFactor ?? true);
	const loginAlerts = $derived(props.loginAlerts ?? true);
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		mergeClassNames('c-security-settings border rounded-lg p-4 space-y-2', className)
	);

	const restProps = $derived.by(() => {
		const { class: _class, twoFactor: _twoFactor, loginAlerts: _loginAlerts, ...rest } = props;
		return rest;
	});

	return {
		get twoFactor() {
			return twoFactor;
		},
		get loginAlerts() {
			return loginAlerts;
		},
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
