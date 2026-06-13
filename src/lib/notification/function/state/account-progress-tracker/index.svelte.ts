import type { AccountProgressTrackerProps } from '$stylist/notification/type/struct/account-progress-tracker-props';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createAccountProgressTrackerState(props: AccountProgressTrackerProps) {
	let localCurrentStep = $state(props.currentStep ?? 0);

	$effect(() => {
		localCurrentStep = props.currentStep ?? 0;
	});

	const steps = $derived(props.steps ?? []);
	const containerClasses = $derived(
		joinClassNames('account-progress-tracker-container', props.class ?? '')
	);

	function getStepClasses(i: number): string {
		return i <= localCurrentStep ? 'apt-step apt-step--active' : 'apt-step';
	}

	function getConnectorClasses(i: number): string {
		return i < localCurrentStep ? 'apt-connector apt-connector--active' : 'apt-connector';
	}

	return {
		get localCurrentStep() {
			return localCurrentStep;
		},
		get steps() {
			return steps;
		},
		get containerClasses() {
			return containerClasses;
		},
		getStepClasses,
		getConnectorClasses
	};
}

export default createAccountProgressTrackerState;
