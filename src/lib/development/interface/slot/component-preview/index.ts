import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { Snippet } from 'svelte';

export interface SlotComponentPreview
	extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	title: string;
	description?: string;
	code: string;
	language?: string;
	componentDemo: Snippet;
	showCode?: boolean;
	class?: string;
}
