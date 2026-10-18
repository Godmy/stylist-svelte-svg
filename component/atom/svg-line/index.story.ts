import SvgLine from './index.svelte';
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
		x1: { type: 'range', min: 0, max: 100, step: 1 },
		y1: { type: 'range', min: 0, max: 40, step: 1 },
		x2: { type: 'range', min: 0, max: 100, step: 1 },
		y2: { type: 'range', min: 0, max: 40, step: 1 },
		stroke: { type: 'text' },
		'stroke-width': { type: 'number', min: 0, max: 8, step: 0.5 },
		'stroke-dasharray': { type: 'text' }
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
