import type { RecipeScrumBacklog } from '$stylist/management/interface/recipe/scrum-backlog';
import type { SlotBacklogItem as BacklogItem } from '$stylist/management/interface/slot/backlog-item';

import { createBacklogItem } from '$stylist/management/function/script/create-backlog-item';
import { filterBacklogItems } from '$stylist/management/function/script/scrum-backlog';
import { formatBacklogItemDate } from '$stylist/management/function/script/format-backlog-item-date';

export function createScrumBacklogState(props: RecipeScrumBacklog) {
	// Props with defaults
	const data = $derived(props.data);
	const showFilters = $derived(props.showFilters ?? true);
	const onItemAdd = $derived(props.onItemAdd);
	const onItemUpdate = $derived(props.onItemUpdate);
	const onItemDelete = $derived(props.onItemDelete);

	// SlotState for filters
	let statusFilter = $state<string>('all');
	let priorityFilter = $state<string>('all');
	let searchQuery = $state<string>('');

	// SlotState for new item form
	let showAddForm = $state<boolean>(false);
	let editingItemId = $state<string | null>(null);
	let newItemTitle = $state<string>('');
	let newItemDescription = $state<string>('');
	let newItemAssignee = $state<string>('');
	let newItemPriority = $state<'low' | 'medium' | 'high'>('medium');
	let newItemEstimatedHours = $state<number>(0);
	let newItemEstimatedHoursStr = $state<string>('0');
	let newItemStatus = $state<'todo' | 'in-progress' | 'done'>('todo');

	// Computed
	const filteredItems = $derived(
		filterBacklogItems(data.items, statusFilter, priorityFilter, searchQuery)
	);

	// Methods
	function resetForm(): void {
		editingItemId = null;
		newItemTitle = '';
		newItemDescription = '';
		newItemAssignee = '';
		newItemPriority = 'medium';
		newItemEstimatedHours = 0;
		newItemEstimatedHoursStr = '0';
		newItemStatus = 'todo';
		showAddForm = false;
	}

	function startItemEdit(item: BacklogItem): void {
		editingItemId = item.id;
		newItemTitle = item.title;
		newItemDescription = item.description ?? '';
		newItemAssignee = item.assignee ?? '';
		newItemPriority = item.priority;
		newItemEstimatedHours = item.estimatedHours ?? 0;
		newItemEstimatedHoursStr = String(item.estimatedHours ?? 0);
		newItemStatus = item.status;
		showAddForm = true;
	}

	function cancelForm(): void {
		resetForm();
	}

	function handleSubmitItem(): void {
		if (!newItemTitle.trim()) return;

		if (editingItemId) {
			const currentItem = data.items.find((item) => item.id === editingItemId);

			if (currentItem && onItemUpdate) {
				onItemUpdate({
					...currentItem,
					title: newItemTitle,
					description: newItemDescription,
					assignee: newItemAssignee || undefined,
					priority: newItemPriority,
					estimatedHours: newItemEstimatedHours || undefined,
					status: newItemStatus,
					updatedAt: new Date()
				});
			}
		} else {
			const newItem = createBacklogItem(
				newItemTitle,
				newItemDescription,
				newItemAssignee,
				newItemPriority,
				newItemEstimatedHours
			);

			newItem.status = newItemStatus;

			if (onItemAdd) onItemAdd(newItem);
		}

		resetForm();
	}

	function handleHoursInput(value: string): void {
		newItemEstimatedHoursStr = value;
		newItemEstimatedHours = parseInt(value || '0', 10);
	}

	function formatDate(date: Date): string {
		return formatBacklogItemDate(date);
	}

	// CSS classes

	return {
		get data() {
			return data;
		},
		get showFilters() {
			return showFilters;
		},
		get statusFilter() {
			return statusFilter;
		},
		set statusFilter(value: string) {
			statusFilter = value;
		},
		get priorityFilter() {
			return priorityFilter;
		},
		set priorityFilter(value: string) {
			priorityFilter = value;
		},
		get searchQuery() {
			return searchQuery;
		},
		set searchQuery(value: string) {
			searchQuery = value;
		},
		get showAddForm() {
			return showAddForm;
		},
		set showAddForm(value: boolean) {
			showAddForm = value;
		},
		get editingItemId() {
			return editingItemId;
		},
		get newItemTitle() {
			return newItemTitle;
		},
		set newItemTitle(value: string) {
			newItemTitle = value;
		},
		get newItemDescription() {
			return newItemDescription;
		},
		set newItemDescription(value: string) {
			newItemDescription = value;
		},
		get newItemAssignee() {
			return newItemAssignee;
		},
		set newItemAssignee(value: string) {
			newItemAssignee = value;
		},
		get newItemPriority() {
			return newItemPriority;
		},
		set newItemPriority(value: 'low' | 'medium' | 'high') {
			newItemPriority = value;
		},
		get newItemEstimatedHours() {
			return newItemEstimatedHours;
		},
		set newItemEstimatedHours(value: number) {
			newItemEstimatedHours = value;
		},
		get newItemEstimatedHoursStr() {
			return newItemEstimatedHoursStr;
		},
		set newItemEstimatedHoursStr(value: string) {
			newItemEstimatedHoursStr = value;
		},
		get newItemStatus() {
			return newItemStatus;
		},
		set newItemStatus(value: 'todo' | 'in-progress' | 'done') {
			newItemStatus = value;
		},
		get filteredItems() {
			return filteredItems;
		},
		handleSubmitItem,
		handleHoursInput,
		startItemEdit,
		cancelForm,
		formatDate
	};
}
