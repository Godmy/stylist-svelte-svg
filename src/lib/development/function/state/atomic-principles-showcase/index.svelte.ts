import type { RecipeAtomicPrinciplesShowcase } from '$stylist/development/interface/recipe/atomic-principles-showcase';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createAtomicPrinciplesShowcaseState(props: RecipeAtomicPrinciplesShowcase) {
	const GitBranch = 'git-branch';
	const Code = 'code';
	const Layers = 'layers';
	const Package = 'package';

	const sectionClass = $derived(
		mergeClassNames(
			'c-atomic-principles-showcase',
			props.class == null ? undefined : String(props.class)
		)
	);
	const innerContainerClass = $derived('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8');
	const textCenterClass = $derived('text-center');
	const badgeClass = $derived(
		'inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-100)] px-4 py-2 text-sm font-medium text-[var(--color-primary-700)]'
	);
	const badgeIconClass = $derived('h-4 w-4');
	const badgeTextClass = $derived('font-medium');
	const titleClass = $derived('mt-6 text-4xl font-bold text-[var(--color-text-primary)]');
	const descriptionClass = $derived('mt-4 text-lg leading-8 text-[var(--color-text-secondary)]');
	const gridClass = $derived('mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4');

	const badgeText = $derived(props.badgeText ?? 'Atomic Design');
	const title = $derived(props.title ?? 'Built on Atomic Principles');
	const description = $derived(
		props.description ?? 'Every component follows the proven Atomic Design methodology'
	);
	const stats = $derived(props.stats);

	const restProps = $derived.by(() => {
		const {
			class: _className,
			stats: _stats,
			badgeText: _badgeText,
			title: _title,
			description: _desc,
			...rest
		} = props;
		return rest;
	});

	return {
		get GitBranch() {
			return GitBranch;
		},
		get Code() {
			return Code;
		},
		get Layers() {
			return Layers;
		},
		get Package() {
			return Package;
		},
		get sectionClass() {
			return sectionClass;
		},
		get innerContainerClass() {
			return innerContainerClass;
		},
		get textCenterClass() {
			return textCenterClass;
		},
		get badgeClass() {
			return badgeClass;
		},
		get badgeIconClass() {
			return badgeIconClass;
		},
		get badgeTextClass() {
			return badgeTextClass;
		},
		get titleClass() {
			return titleClass;
		},
		get descriptionClass() {
			return descriptionClass;
		},
		get gridClass() {
			return gridClass;
		},
		get badgeText() {
			return badgeText;
		},
		get title() {
			return title;
		},
		get description() {
			return description;
		},
		get stats() {
			return stats;
		},
		get restProps() {
			return restProps;
		}
	};
}
