import type { SlotCardSkeleton as RecipeCardSkeleton } from '$stylist/notification/interface/slot/card-skeleton';

export function createCardSkeletonState(props: RecipeCardSkeleton) {
	const cards = $derived(Array.from({ length: props.count ?? 3 }, (_, index) => index));
	const rootClass = $derived(`card-skeleton ${props.class ?? ''}`.trim());
	const cardClass = $derived('card-skeleton__item');

	return {
		get cards() {
			return cards;
		},
		get rootClass() {
			return rootClass;
		},
		get cardClass() {
			return cardClass;
		}
	};
}
