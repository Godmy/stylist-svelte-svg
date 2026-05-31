import { CardSkeletonStyleManager } from '$stylist/notification/class/style-manager/card-skeleton';
import type { SlotCardSkeleton as CardSkeletonProps } from '$stylist/notification/interface/slot/card-skeleton';

export function createCardSkeletonState(props: CardSkeletonProps) {
	const cards = $derived(Array.from({ length: props.count ?? 3 }, (_, index) => index));
	const rootClass = $derived(CardSkeletonStyleManager.root(props.class ?? ''));
	const cardClass = $derived(CardSkeletonStyleManager.card());

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

export default createCardSkeletonState;
