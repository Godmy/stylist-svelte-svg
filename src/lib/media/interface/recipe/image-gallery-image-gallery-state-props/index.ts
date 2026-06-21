import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ContractImageGallery as ImageGalleryContract } from '$stylist/media/interface/contract/image-gallery';

export interface ImageGalleryStateProps extends ComputeIntersectAll<[ImageGalleryContract]> {
	class?: string;
}
