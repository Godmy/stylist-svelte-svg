import SvgCircle from '$stylist/svg/component/atom/svg-circle/index.svelte';
import type { RecipeSvgCircle } from '$stylist/svg/interface/recipe/svg-circle';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Typed thin wrapper over the native `<circle>`; the context supplies the `<svg>`. */
export default {
	component: SvgCircle,
	title: 'SvgCircle',
	description:
		'Типизированная тонкая обёртка над нативным <circle> — точки на графиках, легенды, маркеры',
	args: { cx: 20, cy: 20, r: 8, fill: 'currentColor' },
	controls: {
		cx: {
			type: 'range',
			label: 'Center X',
			description: 'Center X in user units.',
			min: 0,
			max: 100,
			step: 1
		},
		cy: {
			type: 'range',
			label: 'Center Y',
			description: 'Center Y in user units.',
			min: 0,
			max: 40,
			step: 1
		},
		r: {
			type: 'range',
			label: 'Radius',
			description: 'Radius in user units.',
			min: 1,
			max: 20,
			step: 1
		},
		fill: {
			type: 'text',
			label: 'Fill',
			description: 'Fill paint; currentColor follows the text color.'
		},
		stroke: {
			type: 'text',
			label: 'Stroke',
			description: 'Stroke paint; currentColor follows the text color.'
		},
		'stroke-width': {
			type: 'number',
			label: 'Stroke Width',
			description: 'Stroke width in user units.',
			min: 0,
			max: 8,
			step: 0.5
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
		Outline: { fill: 'none', stroke: 'currentColor', 'stroke-width': 2 },
		Translucent: { opacity: 0.5 }
	},
	context: {
		kind: 'element',
		tag: 'svg',
		attrs: { viewBox: '0 0 100 40', width: 200, height: 80 },
		children: [{ kind: 'outlet' }]
	},
	layout: 'centered'
} satisfies ContractStory<RecipeSvgCircle>;
