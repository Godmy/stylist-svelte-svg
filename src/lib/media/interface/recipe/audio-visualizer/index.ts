import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeAudioVisualizer
	extends StructIntersectAll<[Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]> {
	src?: string;
	type?: 'bars' | 'wave' | 'circular';
	alt?: string;
	author?: string;
	duration?: number;
	isPlaying?: boolean;
	onPlayToggle?: (isPlaying: boolean) => void;
	class?: string;
}
