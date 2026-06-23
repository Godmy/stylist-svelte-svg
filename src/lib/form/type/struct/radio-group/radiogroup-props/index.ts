import type { HTMLInputAttributes } from 'svelte/elements';
import type { RadioOption } from '../radiooption';
import type { TOKEN_ORIENTATION } from '$stylist/layout/const/enum/orientation';

export type RadioGroupProps = Omit<HTMLInputAttributes, 'type' | 'value' | 'name' | 'checked'> & {
	name: string;
	value?: string;
	options: RadioOption[];
	label?: string;
	description?: string;
	orientation?: (typeof TOKEN_ORIENTATION)[number];
	disabled?: boolean;
	required?: boolean;
	error?: string;
	class?: string;
};
