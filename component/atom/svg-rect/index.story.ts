import SvgRect from '$stylist/svg/component/atom/svg-rect/index.svelte';
import type { RecipeSvgRect } from '$stylist/svg/interface/recipe/svg-rect';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Typed thin wrapper over the native `<rect>`; the context supplies the `<svg>`. */
export default {
	component: SvgRect,
	title: 'SvgRect',
	description:
		'Типизированная тонкая обёртка над нативным <rect> — столбцы диаграмм, фон, области выделения',
	args: { x: 30, y: 5, width: 15, height: 30, fill: 'currentColor' },
	controls: {
		x: { type: 'range', min: 0, max: 100, step: 1 },
		y: { type: 'range', min: 0, max: 40, step: 1 },
		width: { type: 'range', min: 1, max: 100, step: 1 },
		height: { type: 'range', min: 1, max: 40, step: 1 },
		rx: { type: 'range', min: 0, max: 10, step: 1 },
		fill: { type: 'text' },
		opacity: { type: 'range', min: 0, max: 1, step: 0.1 }
	},
	presets: {
		Rounded: { rx: 3, opacity: 0.6 },
		Faded: { opacity: 0.3 }
	},
	context: {
		kind: 'element',
		tag: 'svg',
		attrs: { viewBox: '0 0 100 40', width: 200, height: 80 },
		children: [{ kind: 'outlet' }]
	},
	layout: 'centered'
} satisfies ContractStory<RecipeSvgRect>;
