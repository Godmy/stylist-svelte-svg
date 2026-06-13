import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import type { RecipeDesignTokens } from '$stylist/development/interface/recipe/design-tokens';
import type { DesignTokensTheme } from '$stylist/development/type/struct/design-tokens-theme';

export function createDesignTokensState(props: RecipeDesignTokens) {
	let currentTheme = $state<DesignTokensTheme>(
		props.theme === 'light' ? THEME_MODE_LIGHT : THEME_MODE_DARK
	);
	const layoutTokens = $derived((currentTheme as any).layout ?? {});

	const theme = $derived(props.theme ?? 'light');
	const showTokens = $derived(props.showTokens ?? true);
	const showColorPalette = $derived(props.showColorPalette ?? true);
	const showSpacing = $derived(props.showSpacing ?? true);
	const showTypography = $derived(props.showTypography ?? true);
	const showBorderRadius = $derived(props.showBorderRadius ?? true);
	const showShadows = $derived(props.showShadows ?? true);

	const containerClass = $derived(
		'bg-[--color-background-primary] rounded-lg border border-[--color-border-primary] p-6'
	);
	const headerClass = $derived('mb-6');
	const titleClass = $derived('text-xl font-bold text-[--color-text-primary]');
	const descriptionClass = $derived('mt-2 text-sm text-[--color-text-secondary]');
	const tokensGridClass = $derived('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4');
	const tokenCardClass = $derived(
		'border border-[--color-border-primary] rounded-lg p-4 hover:shadow-md transition-shadow'
	);
	const getTokenPreviewClass = (color: string) =>
		`${color} h-16 rounded-md mb-3 border border-[--color-border-primary]`;
	const tokenNameClass = $derived('text-sm font-medium text-[--color-text-primary]');
	const tokenValueClass = $derived('text-xs text-[--color-text-secondary] font-mono mt-1');
	const tokenCategoryClass = $derived(
		'inline-block px-2 py-1 rounded text-xs font-medium bg-[--color-primary-100] text-[--color-primary-800] mt-2'
	);
	const sectionContainerClass = $derived('mb-8');
	const sectionTitleClass = $derived('text-lg font-semibold text-[--color-text-primary] mb-4');
	const tokensTableClass = $derived('w-full border-collapse');
	const tableRowClass = $derived(
		'border-b border-[--color-border-divider] hover:bg-[--color-background-secondary]'
	);
	const tableCellClass = $derived('px-4 py-3 text-sm');
	const previewCellClass = $derived('w-24');
	const getColorPreviewClass = (color: string) =>
		`${color} w-12 h-8 rounded border border-[--color-border-primary]`;
	const nameCellClass = $derived('font-medium text-[--color-text-primary]');
	const valueCellClass = $derived('font-mono text-[--color-text-secondary]');
	const copyButtonClass = $derived(
		'p-1 rounded hover:bg-[--color-background-tertiary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]'
	);
	const copyIconClass = $derived('w-4 h-4 text-[--color-text-secondary]');
	const filtersContainerClass = $derived('mb-6 flex flex-wrap gap-2');
	const getFilterButtonClass = (isActive: boolean) =>
		isActive
			? 'px-3 py-1 rounded-full text-sm font-medium transition-colors bg-[--color-primary-600] text-[--color-text-inverse]'
			: 'px-3 py-1 rounded-full text-sm font-medium transition-colors bg-[--color-background-secondary] text-[--color-text-secondary] hover:text-[--color-text-primary]';

	$effect(() => {
		currentTheme = theme === 'light' ? THEME_MODE_LIGHT : THEME_MODE_DARK;
	});

	function renderColorToken(tokenName: string, tokenValue: string) {
		return `
      <div class="flex flex-col items-center p-2">
        <div
          class="w-16 h-16 rounded-md border border-[--color-border-primary] mb-2"
          style="background-color: ${tokenValue}"
        ></div>
        <span class="text-xs font-mono">${tokenName}</span>
        <span class="text-xs">${tokenValue}</span>
      </div>
    `;
	}

	function isColorToken(tokenName: string) {
		return (
			tokenName.includes('color-') &&
			!tokenName.includes('text') &&
			!tokenName.includes('bg') &&
			!tokenName.includes('control')
		);
	}

	return {
		get currentTheme() {
			return currentTheme;
		},
		get layoutTokens() {
			return layoutTokens;
		},
		get theme() {
			return theme;
		},
		get showTokens() {
			return showTokens;
		},
		get showColorPalette() {
			return showColorPalette;
		},
		get showSpacing() {
			return showSpacing;
		},
		get showTypography() {
			return showTypography;
		},
		get showBorderRadius() {
			return showBorderRadius;
		},
		get showShadows() {
			return showShadows;
		},
		get containerClass() {
			return containerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get titleClass() {
			return titleClass;
		},
		get descriptionClass() {
			return descriptionClass;
		},
		get tokensGridClass() {
			return tokensGridClass;
		},
		get tokenCardClass() {
			return tokenCardClass;
		},
		getTokenPreviewClass,
		get tokenNameClass() {
			return tokenNameClass;
		},
		get tokenValueClass() {
			return tokenValueClass;
		},
		get tokenCategoryClass() {
			return tokenCategoryClass;
		},
		get sectionContainerClass() {
			return sectionContainerClass;
		},
		get sectionTitleClass() {
			return sectionTitleClass;
		},
		get tokensTableClass() {
			return tokensTableClass;
		},
		get tableRowClass() {
			return tableRowClass;
		},
		get tableCellClass() {
			return tableCellClass;
		},
		get previewCellClass() {
			return previewCellClass;
		},
		getColorPreviewClass,
		get nameCellClass() {
			return nameCellClass;
		},
		get valueCellClass() {
			return valueCellClass;
		},
		get copyButtonClass() {
			return copyButtonClass;
		},
		get copyIconClass() {
			return copyIconClass;
		},
		get filtersContainerClass() {
			return filtersContainerClass;
		},
		getFilterButtonClass,
		renderColorToken,
		isColorToken
	};
}
