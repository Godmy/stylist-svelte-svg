<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { TOKEN_FLAG_REGISTRY } from '$stylist/svg/const/record/flag-registry';
	import Svg from '$stylist/svg/component/atom/svg/index.svelte';

	let {
		flag,
		code,
		class: className = '',
		size = '1.5rem',
		...restProps
	}: {
		flag?: string;
		code?: string;
		class?: string;
		size?: number | string;
	} & Omit<HTMLAttributes<HTMLSpanElement>, 'class'> = $props();

	const normalizedFlag = $derived((flag ?? code ?? '').trim().toLowerCase());
	const normalizedCode = $derived((code ?? '').split('-').pop()?.trim().toLowerCase() ?? '');
	const svg = $derived(
		TOKEN_FLAG_REGISTRY[normalizedFlag as keyof typeof TOKEN_FLAG_REGISTRY] ??
			TOKEN_FLAG_REGISTRY[normalizedCode as keyof typeof TOKEN_FLAG_REGISTRY]
	);
	const fallback = $derived((flag ?? code ?? '').trim().toUpperCase());
	const rootClass = $derived(['flag', className].filter(Boolean).join(' '));
</script>

<span class={rootClass} {...restProps}>
	{#if svg}
		<Svg svg={svg} size={size} aria-label={fallback ? `${fallback} flag` : 'Flag'} />
	{:else}
		<span class="flag__fallback">{fallback}</span>
	{/if}
</span>

<style>
	.flag {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
	}

	.flag :global(svg) {
		border-radius: 0.125rem;
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.12);
		overflow: hidden;
	}

	.flag__fallback {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 1.5rem;
		height: 1.5rem;
		border-radius: 9999px;
		background: var(--color-background-tertiary);
		color: var(--color-text-primary);
		font-size: 0.75rem;
		font-weight: 600;
	}
</style>
