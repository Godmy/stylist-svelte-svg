<script lang="ts">
	import type { RecipeNotificationBadge } from '$stylist/notification/interface/recipe/notification-badge';
	import { createNotificationBadgeState } from '$stylist/notification/function/state/notification-badge/index.svelte';

	let props: RecipeNotificationBadge = $props();
	const state = createNotificationBadgeState(props);
</script>

{#if state.shouldShow}
	<div class="notification-badge" {...state.restProps}>
		{#if props.children}
			{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
		{/if}

		<span class="notification-badge__badge">
			{#if !state.showDot && (state.count > 0 || state.showZero)}
				{state.badgeContent}
			{/if}
		</span>
	</div>
{:else}
	<div class="${props.class ?? ''} _c1" {...state.restProps}>
		{#if props.children}
			{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
		{/if}
	</div>
{/if}

<style>
	.notification-badge {
		position: relative;
		display: inline-flex;
	}

	._c1 {
		display: inline-block;
	}
</style>
