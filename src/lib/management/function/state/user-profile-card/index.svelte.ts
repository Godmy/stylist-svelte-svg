import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeUserProfileCard } from '$stylist/management/interface/recipe/user-profile-card';

export function createUserProfileCardState(props: RecipeUserProfileCard) {
	const name = $derived(props.name ?? 'Jane Doe');
	const role = $derived(props.role ?? 'Administrator');
	const email = $derived(props.email ?? 'jane@example.com');
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		mergeClassNames('c-user-profile-card border rounded-lg p-4', className)
	);

	const initial = $derived(name.charAt(0));

	const restProps = $derived.by(() => {
		const { class: _class, name: _name, role: _role, email: _email, ...rest } = props;
		return rest;
	});

	return {
		get name() {
			return name;
		},
		get role() {
			return role;
		},
		get email() {
			return email;
		},
		get initial() {
			return initial;
		},
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
