import type { SlotTabContainer as TabContainerProps } from '$stylist/control/interface/slot/tab-container';

export const createTabListState = (props: TabContainerProps) => {
	const disabled = $derived(props.disabled ?? false);

	return {
		get disabled() {
			return disabled;
		}
	};
};

export default createTabListState;
