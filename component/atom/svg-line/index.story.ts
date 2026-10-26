import SvgLine from '$stylist/svg/component/atom/svg-line/index.svelte';
import type { RecipeSvgLine } from '$stylist/svg/interface/recipe/svg-line';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Typed thin wrapper over the native `<line>`; the context supplies the `<svg>`. */
export default {
	component: SvgLine,
	title: 'SvgLine',
	description:
		'Типизированная тонкая обёртка над нативным <line> — оси, сетка, разделители на графиках',
	args: { x1: 20, y1: 30, x2: 80, y2: 10, stroke: 'currentColor', 'stroke-width': 2 },
	controls: {
		x1: {
			type: 'range',
			label: 'X1',
			description: 'Start X in user units.',
			min: 0,
			max: 100,
			step: 1
		},
		y1: {
			type: 'range',
			label: 'Y1',
			description: 'Start Y in user units.',
			min: 0,
			max: 40,
			step: 1
		},
		x2: {
			type: 'range',
			label: 'X2',
			description: 'End X in user units.',
			min: 0,
			max: 100,
			step: 1
		},
		y2: {
			type: 'range',
			label: 'Y2',
			description: 'End Y in user units.',
			min: 0,
			max: 40,
			step: 1
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
		'stroke-dasharray': {
			type: 'text',
			label: 'Dash Pattern',
			description: 'Dash and gap lengths, for example `4 2`.'
		}
	},
	presets: {
		'X axis': { x1: 5, y1: 35, x2: 95, y2: 35, 'stroke-width': 1 },
		'Y axis': { x1: 5, y1: 35, x2: 5, y2: 5, 'stroke-width': 1 },
		Dashed: { 'stroke-dasharray': '4 2' }
	},
	context: {
		kind: 'element',
		tag: 'svg',
		attrs: { viewBox: '0 0 100 40', width: 200, height: 80 },
		children: [{ kind: 'outlet' }]
	},
	layout: 'centered'
} satisfies ContractStory<RecipeSvgLine>;
