import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeAudioSlider
	extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	label?: string;
	showValue?: boolean;
	volume?: number;
	muted?: boolean;
	onVolumeChange?: (volume: number) => void;
	class?: string;
}
