import type { StateProps } from '$stylist/notification/type/struct/state-props';

export function createStateState(props: StateProps) {
	const title = $derived(props.title);
	const description = $derived(props.description);
	const action = $derived(props.action);
	const containerClasses = $derived(`empty-state ${props.class ?? ''}`.trim());
	const titleClasses = $derived('empty-state__title');
	const descriptionClasses = $derived('empty-state__description');
	const actionContainerClasses = $derived('empty-state__actions');
	const actionButtonClasses = $derived('empty-state__action-btn');
	const iconClasses = $derived('empty-state__icon');
	const actionIconClasses = $derived('empty-state__action-icon');

	return {
		get title() {
			return title;
		},
		get description() {
			return description;
		},
		get action() {
			return action;
		},
		get containerClasses() {
			return containerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get actionContainerClasses() {
			return actionContainerClasses;
		},
		get actionButtonClasses() {
			return actionButtonClasses;
		},
		get iconClasses() {
			return iconClasses;
		},
		get actionIconClasses() {
			return actionIconClasses;
		}
	};
}

export default createStateState;
