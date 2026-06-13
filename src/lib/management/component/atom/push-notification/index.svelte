<script lang="ts">
	import type { PushNotificationProps } from '$stylist/management/interface/recipe/push-notification';
	import createPushNotificationState from '$stylist/management/function/state/push-notification/index.svelte';

	let props: Parameters<typeof createPushNotificationState>[0] = $props();
	const state = createPushNotificationState(props);
</script>

{#if state.visible}
	<div class={state.containerClasses}>
		<div class="_c1">
			{#if state.showIcon}
				<span class="_c2">{state.typeIcons[state.type as keyof typeof state.typeIcons]}</span>
			{/if}
			<div>
				{#if state.title}
					<h3 class="_c3">{state.title}</h3>
				{/if}
				<p>{state.message}</p>
			</div>
		</div>
		<button onclick={state.handleClose} aria-label="Close notification" class="_c4 _c1">
			<svg
				class="_c5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>
{/if}

<style>
	._c1 {
		display: flex;
		align-items: flex-start;
	}
	._c2 {
		margin-right: 0.75rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
	._c3 {
		font-weight: 600;
	}
	._c4 {
		margin-left: 1rem;
		color: var(--color-text-secondary);
	}
	._c5 {
		height: 1.25rem;
		width: 1.25rem;
	}

	._c1:hover {
		color: var(--color-text-primary);
	}
</style>
