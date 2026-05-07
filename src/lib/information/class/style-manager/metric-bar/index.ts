import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class MetricBarStyleManager {
	static getContainerClasses(className = ''): string {
		return mergeClassNames('flex flex-col gap-2', className);
	}

	static getHeaderClasses(): string {
		return 'flex items-center justify-between gap-3';
	}

	static getLabelClasses(): string {
		return 'text-sm font-medium text-[var(--color-text-primary)]';
	}

	static getValueClasses(): string {
		return 'text-sm tabular-nums text-[var(--color-text-secondary)]';
	}

	static getTrackClasses(): string {
		return 'h-2 overflow-hidden rounded-full bg-[var(--metric-bar-track-color,var(--color-neutral-200))]';
	}

	static getFillClasses(): string {
		return 'h-full rounded-full bg-[var(--metric-bar-color,var(--color-primary-500))] transition-[width] duration-300 ease-out';
	}
}
