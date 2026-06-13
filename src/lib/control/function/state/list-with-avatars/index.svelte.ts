import type { RecipeListWithAvatars } from '$stylist/control/interface/recipe/list-with-avatars';

export function createListWithAvatarsState(props: RecipeListWithAvatars) {
	const size = $derived(props.size ?? 'md');

	return {
		get size() {
			return size;
		}
	};
}
