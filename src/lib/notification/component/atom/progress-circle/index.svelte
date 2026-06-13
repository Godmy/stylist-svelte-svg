<script lang="ts">
	import createProgressCircleState from '$stylist/notification/function/state/progress-circle/index.svelte';

	const props = $props();
	const state = createProgressCircleState(props);
</script>

<div class={state.containerClass} {...props}>
	<svg class={state.svgClass} viewBox="0 0 100 100">
		<circle
			cx="50"
			cy="50"
			r="45"
			fill="none"
			stroke="currentColor"
			stroke-width={state.strokeWidth}
			class={state.backgroundCircleClass}
		/>
		<circle
			cx="50"
			cy="50"
			r="45"
			fill="none"
			stroke="currentColor"
			stroke-width={state.strokeWidth}
			stroke-linecap="round"
			stroke-dasharray={state.circumference}
			stroke-dashoffset={state.strokeDashoffset}
			transform="rotate(-90 50 50)"
			class={state.progressCircleClass}
			style="transition-property: stroke-dashoffset, stroke; transition-duration: 0.3s; transition-timing-function: ease-in-out;"
		/>
	</svg>
	<span class={state.labelClass}>
		{state.normalizedProgress}%
	</span>
</div>

<style>
	.progress-circle-container {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.progress-circle-svg {
		width: 100%;
		height: 100%;
	}

	.progress-circle__bg {
		opacity: 0.2;
	}

	.progress-circle__fill {
		transition: stroke-dashoffset 0.3s ease-in-out;
	}

	.progress-circle__bg.variant-primary,
	.progress-circle__fill.variant-primary {
		color: var(--color-primary-500);
	}

	.progress-circle__bg.variant-success,
	.progress-circle__fill.variant-success {
		color: var(--color-success-500);
	}

	.progress-circle__bg.variant-warning,
	.progress-circle__fill.variant-warning {
		color: var(--color-warning-500);
	}

	.progress-circle__bg.variant-danger,
	.progress-circle__fill.variant-danger {
		color: var(--color-danger-500);
	}

	.progress-circle__bg.variant-secondary,
	.progress-circle__fill.variant-secondary {
		color: var(--color-secondary-500);
	}

	.progress-circle-label {
		position: absolute;
		font-size: 0.875rem;
		font-weight: 600;
	}
</style>
