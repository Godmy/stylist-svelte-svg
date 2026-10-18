import SvgPolygon from './index.svelte';
import type { RecipeSvgPolygon } from '$stylist/svg/interface/recipe/svg-polygon';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Typed thin wrapper over the native `<polygon>`; the context supplies the `<svg>`. */
export default {
	component: SvgPolygon,
	title: 'SvgPolygon',
	description:
		'Типизированная тонкая обёртка над нативным <polygon> — радар-диаграммы, залитые области, произвольные фигуры',
	args: {
		points: '20,5 35,15 30,35 10,35 5,15',
		fill: 'currentColor',
		opacity: 0.4,
		stroke: 'currentColor',
		'stroke-width': 1
	},
	controls: {
		points: { type: 'text' },
		fill: { type: 'text' },
		stroke: { type: 'text' },
		'stroke-width': { type: 'number', min: 0, max: 8, step: 0.5 },
		opacity: { type: 'range', min: 0, max: 1, step: 0.1 }
	},
	context: {
		kind: 'element',
		tag: 'svg',
		attrs: { viewBox: '0 0 100 40', width: 200, height: 80 },
		children: [{ kind: 'outlet' }]
	},
	layout: 'centered'
} satisfies ContractStory<RecipeSvgPolygon>;
