import { ConfirmationDialogStyleManager } from '$stylist/navigation/class/style-manager/confirmation-dialog';
import type { SlotConfirmationDialog as ConfirmationDialogProps } from '$stylist/navigation/interface/slot/confirmation-dialog';

export function createConfirmationDialogState(props: ConfirmationDialogProps) {
	const handleConfirm = () => {
		props.onConfirm?.();
		props.onClose?.();
	};

	const handleCancel = () => {
		props.onCancel?.();
		props.onClose?.();
	};

	const handleClose = () => {
		props.onClose?.();
	};

	const overlayClass = $derived(ConfirmationDialogStyleManager.overlay(props.class ?? ''));
	const contentClass = $derived(ConfirmationDialogStyleManager.content(props.contentClass ?? ''));
	const headerClass = $derived(ConfirmationDialogStyleManager.header(props.headerClass ?? ''));
	const bodyClass = $derived(ConfirmationDialogStyleManager.body(props.bodyClass ?? ''));
	const footerClass = $derived(ConfirmationDialogStyleManager.footer(props.footerClass ?? ''));

	return {
		get overlayClass() {
			return overlayClass;
		},
		get contentClass() {
			return contentClass;
		},
		get headerClass() {
			return headerClass;
		},
		get bodyClass() {
			return bodyClass;
		},
		get footerClass() {
			return footerClass;
		},
		handleConfirm,
		handleCancel,
		handleClose
	};
}

export default createConfirmationDialogState;
