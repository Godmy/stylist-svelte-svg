export interface SlotWarrantyClaim {
	id: string;
	date: Date;
	status: 'pending' | 'approved' | 'rejected' | 'resolved';
	issue: string;
	description?: string;
	resolution?: string;
	claimNumber: string;
}
