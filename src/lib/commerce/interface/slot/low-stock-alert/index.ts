export interface SlotLowStockAlert {
	id: string;
	itemId: string;
	itemName: string;
	threshold: number;
	currentLevel: number;
	date: Date;
	acknowledged?: boolean;
}
