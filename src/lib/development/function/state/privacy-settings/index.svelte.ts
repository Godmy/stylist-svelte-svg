import type { RecipePrivacySettings } from '$stylist/development/interface/recipe/privacy-settings';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createPrivacySettingsState(props: RecipePrivacySettings) {
	let localSettings = $state([...props.settings]);
	$effect(() => {
		localSettings = [...props.settings];
	});

	const containerClass = $derived(
		mergeClassNames(
			'c-privacy-settings border border-[var(--color-border-primary)] p-6 shadow-sm bg-[--color-background-primary] overflow-hidden rounded-lg',
			props.class ?? ''
		)
	);
	const titleClass = $derived('mb-4 text-xl font-bold text-[var(--color-text-primary)]');
	const settingsContainerClass = $derived('space-y-4');
	const settingItemClass = $derived(
		'flex items-start justify-between rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-3'
	);
	const settingContentClass = $derived('');
	const settingLabelClass = $derived('font-medium text-[var(--color-text-primary)]');
	const settingDescriptionClass = $derived('text-sm text-[var(--color-text-secondary)]');
	const toggleContainerClass = $derived('relative inline-flex items-center cursor-pointer');
	const toggleInputClass = $derived('sr-only');
	const toggleTrackClass = (isEnabled: boolean) =>
		`block h-6 w-11 rounded-full ${isEnabled ? 'bg-[var(--color-primary-500)]' : 'bg-[var(--color-neutral-300)]'}`;
	const toggleThumbClass = (isEnabled: boolean) =>
		`absolute left-1 top-1 h-4 w-4 rounded-full bg-[var(--color-background-primary)] transition-transform ${isEnabled ? 'translate-x-5' : ''}`;
	const saveButtonContainerClass = $derived('mt-6');
	const saveButtonClass = $derived(
		'rounded bg-[var(--color-primary-500)] px-4 py-2 text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-600)]'
	);

	function toggleSetting(id: string) {
		const index = localSettings.findIndex((s) => s.id === id);
		if (index !== -1) {
			localSettings[index] = {
				...localSettings[index],
				enabled: !localSettings[index].enabled
			};
		}
	}

	return {
		get localSettings() {
			return localSettings;
		},
		get containerClass() {
			return containerClass;
		},
		get titleClass() {
			return titleClass;
		},
		get settingsContainerClass() {
			return settingsContainerClass;
		},
		get settingItemClass() {
			return settingItemClass;
		},
		get settingContentClass() {
			return settingContentClass;
		},
		get settingLabelClass() {
			return settingLabelClass;
		},
		get settingDescriptionClass() {
			return settingDescriptionClass;
		},
		get toggleContainerClass() {
			return toggleContainerClass;
		},
		get toggleInputClass() {
			return toggleInputClass;
		},
		toggleTrackClass,
		toggleThumbClass,
		get saveButtonContainerClass() {
			return saveButtonContainerClass;
		},
		get saveButtonClass() {
			return saveButtonClass;
		},
		toggleSetting
	};
}
