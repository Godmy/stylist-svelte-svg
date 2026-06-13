import type { HTMLAttributes } from 'svelte/elements';

export interface SlotAccessibilityToolbar extends HTMLAttributes<HTMLDivElement> {
	showFontSizeControls?: boolean;
	showScreenReaderTester?: boolean;
	showFocusIndicator?: boolean;
	showTokenAnimationToggle?: boolean;
	showFocusIndicatorToggle?: boolean;
	showAnimationToggle?: boolean;
	class?: string;
	toolbarClass?: string;
	buttonClass?: string;
	variant?: 'default' | 'minimal' | 'compact';
	size?: 'sm' | 'md' | 'lg';
}
