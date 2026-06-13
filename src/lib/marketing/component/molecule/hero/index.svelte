<script lang="ts">
	import type { SlotHero as IHeroProps } from '$stylist/marketing/interface/slot/hero';
	import createHeroState from '$stylist/marketing/function/state/hero/index.svelte';
	import AnimatedNumber from '$stylist/animation/component/atom/animated-number/index.svelte';

	let props: IHeroProps = $props();
	const state = createHeroState(props);
</script>

<div class="hero" role="banner">
	<!-- Р В¤Р С•Р Р…Р С•Р Р†Р С•Р Вµ Р С‘Р В·Р С•Р В±РЎР‚Р В°Р В¶Р ВµР Р…Р С‘Р Вµ Р С‘Р В»Р С‘ Р С–РЎР‚Р В°Р Т‘Р С‘Р ВµР Р…РЎвЂљ -->
	{#if state.backgroundVariant === 'image' && state.backgroundImage}
		<div
			class="hero__background"
			style={`background-image: url('${state.backgroundImage}'); opacity: var(--opacity-30);`}
			aria-hidden="true"
		></div>
	{:else if state.backgroundVariant === 'gradient'}
		<div class="hero__background" aria-hidden="true"></div>
	{:else if state.backgroundVariant === 'particles'}
		<!-- Р СџР С•Р С”Р В° РЎвЂЎРЎвЂљР С• Р С—РЎР‚Р С•РЎРѓРЎвЂљР С•Р в„– Р С–РЎР‚Р В°Р Т‘Р С‘Р ВµР Р…РЎвЂљ Р Р†Р СР ВµРЎРѓРЎвЂљР С• РЎвЂЎР В°РЎРѓРЎвЂљР С‘РЎвЂ  -->
		<div
			class={state.backgroundClasses + ' [background-image:var(--gradient-cosmic)]'}
			aria-hidden="true"
		></div>
	{/if}

	<!-- Р С›РЎРѓР Р…Р С•Р Р†Р Р…Р С•Р в„– Р С”Р С•Р Р…РЎвЂљР ВµР Р…РЎвЂљ -->
	<div class="hero__content">
		<h1 class="hero__title" aria-label={state.title}>{state.title}</h1>

		{#if state.subtitle}
			<p class="hero__subtitle" aria-label={state.subtitle}>{state.subtitle}</p>
		{/if}

		{#if state.stats && state.stats.length > 0}
			<div class="hero__stats-container">
				{#each state.stats as stat}
					<div class="hero__stat-item" aria-label={`${stat.label}: ${stat.value}`}>
						<div class="hero__stat-value">
							{#if typeof stat.value === 'number'}
								<AnimatedNumber value={stat.value} />
							{:else}
								{stat.value}
							{/if}
						</div>
						<div class="hero__stat-label">{stat.label}</div>
					</div>
				{/each}
			</div>
		{/if}

		{#if state.primaryCTA || state.secondaryCTA}
			<div class="hero__TODO-ctaContainerClasses">
				{#if state.primaryCTA}
					<button
						class="hero__TODO-primaryCTAButtonClasses"
						onclick={state.handlePrimaryClick}
						type="button"
						aria-label={state.primaryCTA.label}
					>
						{state.primaryCTA.label}
					</button>
				{/if}

				{#if state.secondaryCTA}
					<button
						class="hero__TODO-secondaryCTAButtonClasses"
						onclick={state.handleSecondaryClick}
						type="button"
						aria-label={state.secondaryCTA.label}
					>
						{state.secondaryCTA.label}
					</button>
				{/if}
			</div>
		{/if}

		{#if state.children}
			<div class="hero-children">
				{#if state.children}{@render state.children()}{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.hero-children {
		margin-top: 2rem;
	}
</style>
