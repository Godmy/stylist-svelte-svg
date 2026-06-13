import type { ImageGalleryStateProps as LegacyImageGalleryProps1 } from '$stylist/media/interface/recipe/image-gallery-image-gallery-state-props';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export interface RecipeImageGallery
	extends StructIntersectAll<[LegacyImageGalleryProps1, SlotChildren]> {
	width?: number;
	height?: number;
	src?: string;
	cropEnabled?: boolean;
	filter?: string;
	brightness?: number;
	contrast?: number;
	saturation?: number;
	hue?: number;
	class?: string;
}
