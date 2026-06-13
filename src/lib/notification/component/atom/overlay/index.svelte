<script lang="ts">
	import createOverlayState from '$stylist/notification/function/state/overlay/index.svelte';

	const props = $props();
	const state = createOverlayState(props);
</script>

{#if state.isLoading}
	<div class="loading-overlay">
		<div class="loading-content">
			<div class={state.spinnerClasses}></div>
			<div class="loading-message">{state.message}</div>
		</div>
	</div>
{/if}

<style>
	.loading-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-overlay-bg, rgba(0, 0, 0, 0.4));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 50;
		transition: opacity 0.3s ease-in-out;
	}

	.loading-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 2rem;
		background-color: var(--color-background-primary);
		border-radius: var(--border-radius-base, 0.375rem);
		box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
	}

	.loading-message {
		font-size: 1rem;
		color: var(--color-text-secondary);
		text-align: center;
	}

	.spinner {
		display: inline-block;
		border: 4px solid var(--color-border-light, rgba(0, 0, 0, 0.1));
		border-top-color: var(--color-primary-500);
		border-radius: 50%;
		animation: overlay-spin 1s linear infinite;
	}

	.spinner.sm {
		width: 1.25rem;
		height: 1.25rem;
		border-width: 2px;
	}
	.spinner.md {
		width: 2rem;
		height: 2rem;
	}
	.spinner.lg {
		width: 3rem;
		height: 3rem;
	}
	.spinner.xl {
		width: 4rem;
		height: 4rem;
	}
	.spinner.\32xl {
		width: 5rem;
		height: 5rem;
	}

	@keyframes overlay-spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
