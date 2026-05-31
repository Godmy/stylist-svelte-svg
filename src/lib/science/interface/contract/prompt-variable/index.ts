import type { PromptVariableType } from '$stylist/science/type/struct/prompt-variable-type';

export interface ContractPromptVariable {
	id: string;
	name: string;
	description: string;
	type: PromptVariableType;
	required?: boolean;
	defaultValue?: string | number | boolean;
	options?: Array<{ value: string; label: string }>;
}
