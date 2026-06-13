import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { SVGAttributes } from 'svelte/elements';
export interface ContractSvg
	extends StructIntersectAll<[Omit<SVGAttributes<SVGSVGElement>, 'class'>, SlotContent]> {
	/** SVG content */
	/** SVG source */
	src?: string;
	/** SVG title */
	title?: string;
	/** Icon size */
	size?: number | string;
	/** Stroke width */
	strokeWidth?: number;
	/** Disabled state */
	disabled?: boolean;
	/** Additional CSS class */
	class?: string;
}
