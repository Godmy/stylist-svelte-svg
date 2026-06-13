import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractAnnouncementBanner } from '$stylist/media/interface/contract/announcement-banner';

export interface RecipeAnnouncementBanner
	extends StructIntersectAll<[ContractAnnouncementBanner]> {}
