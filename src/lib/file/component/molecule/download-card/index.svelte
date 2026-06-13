<script lang="ts">
	import type { SlotDownloadCard as IDownloadCardProps } from '$stylist/file/interface/slot/download-card';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
	import { formatFileSize } from '$stylist/file/function/script/format-file-size';
	import { handleFileDownload } from '$stylist/file/function/script/handle-file-download';
	import { createDownloadCardState } from '$stylist/file/function/state/download-card/index.svelte';

	let props: IDownloadCardProps = $props();
	const state = createDownloadCardState(props as IDownloadCardProps & Record<string, unknown>);

	const containerClasses = $derived(
		mergeClassNames(
			'bg-[--color-background-primary] overflow-hidden rounded-lg download-card flex items-center p-4 hover:shadow-md transition-shadow duration-[var(--duration-200)]',
			state.class
		)
	);
	const iconContainerClasses =
		'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center';
	const iconClasses = $derived(
		mergeClassNames(
			'w-6 h-6',
			{
				primary: 'text-[--color-primary-500] bg-[--color-primary-50]',
				secondary: 'text-[--color-neutral-500] bg-[--color-neutral-50]',
				success: 'text-[--color-success-500] bg-[--color-success-50]',
				warning: 'text-[--color-warning-500] bg-[--color-warning-50]',
				danger: 'text-[--color-danger-500] bg-[--color-danger-50]',
				error: 'text-[--color-danger-500] bg-[--color-danger-50]',
				info: 'text-[--color-info-500] bg-[--color-info-50]'
			}[state.variant] ?? 'text-[--color-primary-500] bg-[--color-primary-50]'
		)
	);
	const infoContainerClasses = 'flex-1 min-w-0';
	const fileNameClasses = 'text-sm font-medium text-[--color-text-primary] truncate block';
	const metadataClasses = 'text-xs text-[--color-text-secondary] mt-1 flex flex-wrap gap-2';
	const metadataItemClasses = 'inline-flex items-center';
	const downloadButtonClasses = $derived(
		mergeClassNames(
			'ml-4 p-2 rounded-full hover:bg-[--color-background-secondary] transition-colors duration-[var(--duration-150)]',
			{
				primary: 'text-[--color-primary-600] hover:text-[--color-primary-700]',
				secondary: 'text-[--color-neutral-600] hover:text-[--color-neutral-700]',
				success: 'text-[--color-success-600] hover:text-[--color-success-700]',
				warning: 'text-[--color-warning-600] hover:text-[--color-warning-700]',
				danger: 'text-[--color-danger-600] hover:text-[--color-danger-700]',
				error: 'text-[--color-danger-600] hover:text-[--color-danger-700]',
				info: 'text-[--color-info-600] hover:text-[--color-info-700]'
			}[state.variant] ?? 'text-[--color-primary-600] hover:text-[--color-primary-700]'
		)
	);

	function handleDownload() {
		if (state.downloadUrl) handleFileDownload(state.downloadUrl);
	}
</script>

<div class={containerClasses} role="article" aria-label={`Download card: ${props.file.name}`}>
	<!-- Иконка файла -->
	<div class={iconContainerClasses} aria-hidden="true">
		{#if props.icon}
			<span class={iconClasses} aria-label={props.iconAlt ?? 'File'}>{props.icon}</span>
		{:else}
			<BaseIcon name="download" class={iconClasses} aria-hidden="true" />
		{/if}
	</div>

	<!-- Информация о файле -->
	<div class={infoContainerClasses}>
		<div class={fileNameClasses} aria-label={`File name: ${props.file.name}`}>
			{props.file.name}
		</div>

		{#if props.showMetadata ?? true}
			<div class={metadataClasses} aria-label="File metadata">
				{#if props.file.size}
					<span
						class={metadataItemClasses}
						aria-label={`File size: ${formatFileSize(props.file.size)}`}
					>
						{formatFileSize(props.file.size)}
					</span>
				{/if}
				{#if props.file.type}
					<span class={metadataItemClasses} aria-label={`File type: ${props.file.type}`}>
						{props.file.type}
					</span>
				{/if}
				{#if props.file.date}
					<span class={metadataItemClasses} aria-label={`File date: ${props.file.date}`}>
						{props.file.date}
					</span>
				{/if}
			</div>
		{/if}
	</div>

	<!-- Кнопка скачивания -->
	<button
		class={downloadButtonClasses}
		aria-label={`Download ${props.file.name}`}
		title={`Download ${props.file.name}`}
		onclick={handleDownload}
		type="button"
	>
		<BaseIcon name="download" style="width:1.25rem;height:1.25rem" aria-hidden="true" />
	</button>
</div>
