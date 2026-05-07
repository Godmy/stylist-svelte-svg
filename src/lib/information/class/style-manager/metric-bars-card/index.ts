import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class MetricBarsCardStyleManager {
	static getContainerClasses(className = ''): string {
		return mergeClassNames(
			'flex flex-col gap-5 rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-background-primary)] p-6 shadow-sm',
			className
		);
	}

	static getHeaderClasses(): string {
		return 'flex items-start justify-between gap-4';
	}

	static getTitleClasses(): string {
		return 'text-lg font-semibold text-[var(--color-text-primary)]';
	}

	static getCaptionClasses(): string {
		return 'mt-1 text-sm text-[var(--color-text-secondary)]';
	}

	static getTotalClasses(): string {
		return 'text-lg font-semibold tabular-nums text-[var(--color-text-primary)]';
	}

	static getBarsClasses(): string {
		return 'flex flex-col gap-4';
	}
}
