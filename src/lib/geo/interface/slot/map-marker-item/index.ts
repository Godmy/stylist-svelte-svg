/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface SlotMapMarkerItem {
	id: string;
	lat: number;
	lng: number;
	title?: string;
	description?: string;
	color?: string;
	/** Размер маркера */
	size?: TokenSize;
	icon?: string;
}
