import SvgGroup from '$stylist/svg/component/atom/svg-group/index.svelte';
import type { RecipeSvgGroup } from '$stylist/svg/interface/recipe/svg-group';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Typed thin wrapper over the native `<g>`; index.story.svelte draws the grouped primitives. */
export default {
	component: SvgGroup,
	title: 'SvgGroup',
	description:
		'Типизированная тонкая обёртка над нативным <g> — группировка примитивов с общей transform/aria',
	args: { transform: 'translate(0, 0)', 'aria-label': 'Точка данных', opacity: 1 },
	controls: {
		transform: {
			type: 'text',
			label: 'Transform',
			description: 'SVG transform list applied to the group.'
		},
		'aria-label': {
			type: 'text',
			label: 'Aria Label',
			description: 'Accessible name; without it the graphic is decorative.'
		},
		opacity: {
			type: 'range',
			label: 'Opacity',
			description: 'Opacity from 0 to 1.',
			min: 0,
			max: 1,
			step: 0.1
		}
	},
	presets: {
		Shifted: { transform: 'translate(50, 0)', opacity: 0.5 }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeSvgGroup>;
