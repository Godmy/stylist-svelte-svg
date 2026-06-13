import { onMount } from 'svelte';
import type { RecipeComponentLibraryStats } from '$stylist/development/interface/recipe/component-library-stats';
import type { ComponentLibraryStatsComponentStats } from '$stylist/development/type/struct/component-library-stats-component-stats';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createComponentLibraryStatsState(props: RecipeComponentLibraryStats) {
	let animatedStats = $state<ComponentLibraryStatsComponentStats>({
		totalComponents: 0,
		atoms: 0,
		molecules: 0,
		organisms: 0
	});
	let animationStarted = $state(false);

	const sectionId = $derived(props.sectionId ?? 'stats-section');
	const animateOnVisible = $derived(props.animateOnVisible ?? true);
	const durationMs = $derived(props.durationMs ?? 2000);
	const steps = $derived(props.steps ?? 60);
	const stats = $derived(props.stats);
	const className = $derived(props.class == null ? '' : String(props.class));

	const containerClass = $derived(
		mergeClassNames(
			'bg-[--color-background-primary] rounded-lg border border-[--color-border-primary] p-6',
			className
		)
	);
	const statsGridClass = $derived('grid grid-cols-2 md:grid-cols-4 gap-4');
	const getStatCardClass = (_colorTheme: 'orange' | 'blue' | 'purple' | 'green') =>
		'text-center p-4 rounded-lg bg-[--color-background-secondary]';
	const getStatValueClass = (_colorTheme: 'orange' | 'blue' | 'purple' | 'green') =>
		'text-3xl font-bold text-[--color-primary-600]';
	const getStatLabelClass = $derived('mt-2 text-sm text-[--color-text-secondary]');

	function animateStats() {
		const safeSteps = Math.max(1, steps);
		const stepDuration = Math.max(1, Math.floor(durationMs / safeSteps));
		let currentStep = 0;

		const interval = setInterval(() => {
			const progress = currentStep / safeSteps;
			const easeProgress = 1 - Math.pow(1 - progress, 3);

			animatedStats = {
				totalComponents: Math.floor(stats.totalComponents * easeProgress),
				atoms: Math.floor(stats.atoms * easeProgress),
				molecules: Math.floor(stats.molecules * easeProgress),
				organisms: Math.floor(stats.organisms * easeProgress)
			};

			currentStep += 1;

			if (currentStep > safeSteps) {
				clearInterval(interval);
				animatedStats = stats;
			}
		}, stepDuration);
	}

	onMount(() => {
		if (!animateOnVisible) {
			animationStarted = true;
			animatedStats = stats;
			return;
		}

		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting && !animationStarted) {
					animationStarted = true;
					animateStats();
					observer.disconnect();
					break;
				}
			}
		});

		const statsElement = document.getElementById(sectionId);
		if (statsElement) {
			observer.observe(statsElement);
		}

		return () => observer.disconnect();
	});

	const restProps = $derived.by(() => {
		const {
			class: _className,
			stats: _stats,
			sectionId: _sectionId,
			animateOnVisible: _animate,
			durationMs: _duration,
			steps: _steps,
			...rest
		} = props;
		return rest;
	});

	return {
		get animatedStats() {
			return animatedStats;
		},
		get animationStarted() {
			return animationStarted;
		},
		get sectionId() {
			return sectionId;
		},
		get containerClass() {
			return containerClass;
		},
		get statsGridClass() {
			return statsGridClass;
		},
		getStatCardClass,
		getStatValueClass,
		getStatLabelClass() {
			return getStatLabelClass;
		},
		get restProps() {
			return restProps;
		}
	};
}
