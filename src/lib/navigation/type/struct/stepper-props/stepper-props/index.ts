import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { Step } from '../step';

export type StepperProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	steps: Step[];
	orientation?: 'horizontal' | 'vertical';
	class?: string;
	stepClass?: string;
	connectorClass?: string;
	labelClass?: string;
	descriptionClass?: string;
};
