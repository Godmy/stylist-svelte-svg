import { InteractionInputStyleManager } from '$stylist/input/class/style-manager/interaction-input';
import type { TranslatableText } from '$stylist/input/type/struct/interaction-input/translatable-text';
import type { TranslationEditorStateProps } from '$stylist/localization/interface/recipe/translation-editor';

export function createTranslationEditorState(props: TranslationEditorStateProps) {
	// Props with defaults - extracted from props object
	const texts = props.texts ?? [];
	const locales = props.locales ?? [];
	const defaultLocale = props.defaultLocale ?? 'en';
	const currentLocale = props.currentLocale ?? 'en';
	const showKeyColumn = props.showKeyColumn ?? true;
	const showContextColumn = props.showContextColumn ?? true;
	const showStatusColumn = props.showStatusColumn ?? true;

	// SlotState
	let editingId = $state<string | null>(null);
	let editedValue = $state('');

	// Actions
	function beginEdit(text: TranslatableText) {
		editingId = text.id;
		editedValue = text.translations[currentLocale] || '';
	}

	function saveEdit() {
		if (!editingId) return;
		const text = texts.find((item) => item.id === editingId);
		if (!text) return;
		text.translations[currentLocale] = editedValue;
		props.onTranslationChange?.(text.key, currentLocale, editedValue);
		editingId = null;
	}

	function cancelEdit() {
		editingId = null;
	}

	// Classes
	const rootClass = $derived(
		InteractionInputStyleManager.root('c-translation-editor', props.class ?? '')
	);
	const panelClass = $derived(InteractionInputStyleManager.panel('overflow-hidden'));
	const headerClass = $derived(props.headerClass ?? '');
	const tableClass = $derived(props.tableClass ?? '');
	const rowClass = $derived(props.rowClass ?? '');
	const editorClass = $derived(props.editorClass ?? '');

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			texts: _texts,
			locales: _locales,
			defaultLocale: _defaultLocale,
			currentLocale: _currentLocale,
			headerClass: _headerClass,
			tableClass: _tableClass,
			rowClass: _rowClass,
			editorClass: _editorClass,
			showKeyColumn: _showKeyColumn,
			showContextColumn: _showContextColumn,
			showStatusColumn: _showStatusColumn,
			onTranslationChange: _onTranslationChange,
			onSave: _onSave,
			onImport: _onImport,
			onExport: _onExport,
			...rest
		} = props;
		return rest;
	});

	return {
		// Icons
		get iconDownload() {
			return 'download';
		},
		get iconEdit() {
			return 'edit-3';
		},
		get iconLanguages() {
			return 'languages';
		},
		get iconSave() {
			return 'save';
		},
		get iconTrash() {
			return 'trash-2';
		},
		get iconUpload() {
			return 'upload';
		},
		get texts() {
			return texts;
		},
		get locales() {
			return locales;
		},
		get defaultLocale() {
			return defaultLocale;
		},
		get currentLocale() {
			return currentLocale;
		},
		get showKeyColumn() {
			return showKeyColumn;
		},
		get showContextColumn() {
			return showContextColumn;
		},
		get showStatusColumn() {
			return showStatusColumn;
		},
		get editingId() {
			return editingId;
		},
		get editedValue() {
			return editedValue;
		},
		get rootClass() {
			return rootClass;
		},
		get panelClass() {
			return panelClass;
		},
		get headerClass() {
			return headerClass;
		},
		get tableClass() {
			return tableClass;
		},
		get rowClass() {
			return rowClass;
		},
		get editorClass() {
			return editorClass;
		},
		get restProps() {
			return restProps;
		},
		beginEdit,
		saveEdit,
		cancelEdit
	};
}

export default createTranslationEditorState;
