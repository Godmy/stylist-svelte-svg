import { ScrumBacklogStyleManager } from '$stylist/management/class/style-manager/scrum-backlog';
import type { ScrumBacklogStateProps } from '$stylist/management/interface/recipe/scrum-backlog';
import type { SlotBacklogItem as BacklogItem } from '$stylist/management/interface/slot/backlog-item';

import { createBacklogItem } from '$stylist/management/function/script/create-backlog-item';
import { filterBacklogItems } from '$stylist/management/function/script/scrum-backlog';
import { formatBacklogItemDate } from '$stylist/management/function/script/format-backlog-item-date';

export function createScrumBacklogState(props: ScrumBacklogStateProps) {
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
	const containerClass = $derived(ScrumBacklogStyleManager.getContainerClass());
	const headerClass = $derived(ScrumBacklogStyleManager.getHeaderClass());
	const headerTitleClass = $derived(ScrumBacklogStyleManager.getHeaderTitleClass());
	const headerButtonContainerClass = $derived(
		ScrumBacklogStyleManager.getHeaderButtonContainerClass()
	);
	const addButtonClass = $derived(ScrumBacklogStyleManager.getAddButtonClass());
	const addFormContainerClass = $derived(ScrumBacklogStyleManager.getAddFormContainerClass());
	const formGridClass = $derived(ScrumBacklogStyleManager.getFormGridClass());
	const formColSpanClass = $derived(ScrumBacklogStyleManager.getFormColSpanClass());
	const formLabelClass = $derived(ScrumBacklogStyleManager.getFormLabelClass());
	const formInputClass = $derived(ScrumBacklogStyleManager.getFormInputClass());
	const formTextareaClass = $derived(ScrumBacklogStyleManager.getFormTextareaClass());
	const formSelectClass = $derived(ScrumBacklogStyleManager.getFormSelectClass());
	const formButtonsContainerClass = $derived(
		ScrumBacklogStyleManager.getFormButtonsContainerClass()
	);
	const filtersContainerClass = $derived(ScrumBacklogStyleManager.getFiltersContainerClass());
	const filtersGridClass = $derived(ScrumBacklogStyleManager.getFiltersGridClass());
	const filterLabelClass = $derived(ScrumBacklogStyleManager.getFilterLabelClass());
	const itemsContainerClass = $derived(ScrumBacklogStyleManager.getItemsContainerClass());
	const emptyStateContainerClass = $derived(ScrumBacklogStyleManager.getEmptyStateContainerClass());
	const emptyStateTextClass = $derived(ScrumBacklogStyleManager.getEmptyStateTextClass());
	const itemsGridClass = $derived(ScrumBacklogStyleManager.getItemsGridClass());
	const itemCardClass = $derived(ScrumBacklogStyleManager.getItemCardClass());
	const itemHeaderClass = $derived(ScrumBacklogStyleManager.getItemHeaderClass());
	const itemTitleClass = $derived(ScrumBacklogStyleManager.getItemTitleClass());
	const itemDescriptionClass = $derived(ScrumBacklogStyleManager.getItemDescriptionClass());
	const itemBadgesContainerClass = $derived(ScrumBacklogStyleManager.getItemBadgesContainerClass());
	const itemBadgeClass = $derived(ScrumBacklogStyleManager.getItemBadgeClass());
	const itemActionsContainerClass = $derived(
		ScrumBacklogStyleManager.getItemActionsContainerClass()
	);
	const itemActionButtonClass = $derived(ScrumBacklogStyleManager.getItemActionButtonClass());
	const iconClass = $derived(ScrumBacklogStyleManager.getIconClass());

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
		get containerClass() {
			return containerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get headerTitleClass() {
			return headerTitleClass;
		},
		get headerButtonContainerClass() {
			return headerButtonContainerClass;
		},
		get addButtonClass() {
			return addButtonClass;
		},
		get addFormContainerClass() {
			return addFormContainerClass;
		},
		get formGridClass() {
			return formGridClass;
		},
		get formColSpanClass() {
			return formColSpanClass;
		},
		get formLabelClass() {
			return formLabelClass;
		},
		get formInputClass() {
			return formInputClass;
		},
		get formTextareaClass() {
			return formTextareaClass;
		},
		get formSelectClass() {
			return formSelectClass;
		},
		get formButtonsContainerClass() {
			return formButtonsContainerClass;
		},
		get filtersContainerClass() {
			return filtersContainerClass;
		},
		get filtersGridClass() {
			return filtersGridClass;
		},
		get filterLabelClass() {
			return filterLabelClass;
		},
		get itemsContainerClass() {
			return itemsContainerClass;
		},
		get emptyStateContainerClass() {
			return emptyStateContainerClass;
		},
		get emptyStateTextClass() {
			return emptyStateTextClass;
		},
		get itemsGridClass() {
			return itemsGridClass;
		},
		get itemCardClass() {
			return itemCardClass;
		},
		get itemHeaderClass() {
			return itemHeaderClass;
		},
		get itemTitleClass() {
			return itemTitleClass;
		},
		get itemDescriptionClass() {
			return itemDescriptionClass;
		},
		get itemBadgesContainerClass() {
			return itemBadgesContainerClass;
		},
		get itemBadgeClass() {
			return itemBadgeClass;
		},
		get itemActionsContainerClass() {
			return itemActionsContainerClass;
		},
		get itemActionButtonClass() {
			return itemActionButtonClass;
		},
		get iconClass() {
			return iconClass;
		},
		handleSubmitItem,
		handleHoursInput,
		startItemEdit,
		cancelForm,
		formatDate
	};
}

export default createScrumBacklogState;
