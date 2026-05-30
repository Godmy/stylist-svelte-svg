import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { formatAnimatedValue } from '$stylist/typography/function/script/format-animated-value';
import { formatNumberFlowValue } from '$stylist/typography/function/script/format-number-flow-value';

export class AnimationStyleManager {
	static readonly defaultLanguage = 'en';

	static getAnimatedNumberClasses(className = ''): string {
		return mergeClassNames('c-animation-animated-number', className);
	}

	static getNumberFlowContainerClasses(className = ''): string {
		return mergeClassNames('c-animation-number-flow', className);
	}

	static getNumberFlowPrefixClasses(className = ''): string {
		return mergeClassNames('c-animation-number-flow__prefix', className);
	}

	static getNumberFlowSuffixClasses(className = ''): string {
		return mergeClassNames('c-animation-number-flow__suffix', className);
	}

	static getNumberFlowScreenReaderClasses(className = ''): string {
		return mergeClassNames('c-animation-number-flow__sr-only', className);
	}

	static getNumberFlowClasses(className = ''): {
		container: string;
		prefix: string;
		suffix: string;
		srOnly: string;
	} {
		return {
			container: this.getNumberFlowContainerClasses(className),
			prefix: this.getNumberFlowPrefixClasses(),
			suffix: this.getNumberFlowSuffixClasses(),
			srOnly: this.getNumberFlowScreenReaderClasses()
		};
	}

	static formatNumberFlow(
		value: number,
		locales: string | string[] = 'en-US',
		format?: Intl.NumberFormatOptions
	): string {
		return formatNumberFlowValue(value, locales, format);
	}

	static animateValue(value: number): number {
		return value;
	}

	static formatAnimated(
		value: number,
		options: {
			format?: 'number' | 'percent' | 'currency';
			separator?: string;
			decimals?: number;
		} = {}
	): string {
		return formatAnimatedValue(value, options);
	}
}
