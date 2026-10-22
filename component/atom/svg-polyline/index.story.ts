import SvgPolyline from '$stylist/svg/component/atom/svg-polyline/index.svelte';
import type { RecipeSvgPolyline } from '$stylist/svg/interface/recipe/svg-polyline';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Typed thin wrapper over the native `<polyline>`; the context supplies the `<svg>`. */
export default {
	component: SvgPolyline,
	title: 'SvgPolyline',
	description:
		'Типизированная тонкая обёртка над нативным <polyline> — линейные графики по массиву точек',
	args: {
		points: '2,30 20,10 40,25 60,5 80,20 98,8',
		stroke: 'currentColor',
		'stroke-width': 2,
		fill: 'none'
	},
	controls: {
		points: { type: 'text' },
		fill: { type: 'text' },
		stroke: { type: 'text' },
		'stroke-width': { type: 'number', min: 0, max: 8, step: 0.5 }
	},
	context: {
		kind: 'element',
		tag: 'svg',
		attrs: { viewBox: '0 0 100 40', width: 200, height: 80 },
		children: [{ kind: 'outlet' }]
	},
	layout: 'centered'
} satisfies ContractStory<RecipeSvgPolyline>;
