import type { RecipeThemeBackground } from '$stylist/layout/interface/recipe/background';

export class ObjectManagerBackground {
	static resolveBackground(
		props: RecipeThemeBackground
	): NonNullable<RecipeThemeBackground['background']> {
		return props.background ?? 'default';
	}

	static resolveBackgroundColor(props: RecipeThemeBackground): string {
		return props.backgroundColor ?? '';
	}

	static resolveBackgroundImage(props: RecipeThemeBackground): string {
		return props.backgroundImage ?? '';
	}

	static resolveBackgroundPosition(
		props: RecipeThemeBackground
	): NonNullable<RecipeThemeBackground['backgroundPosition']> {
		return props.backgroundPosition ?? 'center';
	}

	static resolveBackgroundSize(
		props: RecipeThemeBackground
	): NonNullable<RecipeThemeBackground['backgroundSize']> {
		return props.backgroundSize ?? 'cover';
	}

	static resolveBackgroundRepeat(
		props: RecipeThemeBackground
	): NonNullable<RecipeThemeBackground['backgroundRepeat']> {
		return props.backgroundRepeat ?? 'no-repeat';
	}

	static resolveGradient(props: RecipeThemeBackground): string {
		return props.gradient ?? '';
	}

	static resolveOpacity(props: RecipeThemeBackground): number {
		return props.opacity ?? 1;
	}

	static resolveVariant(
		props: RecipeThemeBackground
	): NonNullable<RecipeThemeBackground['variant']> {
		return props.variant ?? 'default';
	}

	static createInlineStyles(input: {
		background: NonNullable<RecipeThemeBackground['background']>;
		backgroundColor: string;
		backgroundImage: string;
		backgroundPosition: NonNullable<RecipeThemeBackground['backgroundPosition']>;
		backgroundSize: NonNullable<RecipeThemeBackground['backgroundSize']>;
		backgroundRepeat: NonNullable<RecipeThemeBackground['backgroundRepeat']>;
		gradient: string;
		opacity: number;
	}): Record<string, string | number> {
		const styles: Record<string, string | number> = {};

		if (input.backgroundColor) {
			styles['--bg-color'] = input.backgroundColor;
		}

		if (input.backgroundImage && input.background === 'image') {
			styles['background-image'] = `url(${input.backgroundImage})`;
			styles['background-position'] = input.backgroundPosition;
			styles['background-size'] = input.backgroundSize;
			styles['background-repeat'] = input.backgroundRepeat;
		}

		if (input.gradient && input.background === 'gradient') {
			styles['background-image'] = input.gradient;
		}

		if (input.opacity < 1) {
			styles.opacity = input.opacity;
		}

		return styles;
	}
}
