import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeSecureForm } from '$stylist/user/interface/recipe/secure-form';

export function createSecureFormState(props: RecipeSecureForm) {
	const token = $derived(props.token ?? 'SECURE_TOKEN');
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		mergeClassNames('c-secure-form border rounded-lg p-4 space-y-2', className)
	);

	const restProps = $derived.by(() => {
		const { class: _class, token: _token, ...rest } = props;
		return rest;
	});

	return {
		get token() {
			return token;
		},
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
