import type { SlotInventoryItem } from '$stylist/commerce/interface/slot/inventory-item';

export interface BehaviorInventoryTrackerEvents {
	onItemRestock?: (item: SlotInventoryItem) => void;
	onItemEdit?: (item: SlotInventoryItem) => void;
	onAlertAcknowledge?: (alertId: string) => void;
	onInventoryExport?: () => void;
}
