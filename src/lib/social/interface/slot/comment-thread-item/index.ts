import type { SlotCommentThreadUser } from '$stylist/social/interface/slot/comment-thread-user';

export interface SlotCommentThreadItem {
	id: string;
	author: SlotCommentThreadUser;
	content: string;
	timestamp: Date;
	replies?: SlotCommentThreadItem[];
	likes?: number;
	liked?: boolean;
	isEdited?: boolean;
}
