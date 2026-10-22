import SvgText from '$stylist/svg/component/atom/svg-text/index.svelte';
import type { RecipeSvgText } from '$stylist/svg/interface/recipe/svg-text';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Typed thin wrapper over the native `<text>`; the context supplies the `<svg>`. */
export default {
	component: SvgText,
	title: 'SvgText',
	description:
		'Типизированная тонкая обёртка над нативным <text> — подписи осей, значения, легенды на графиках',
	args: { x: 10, y: 20, fill: 'currentColor', 'font-size': 8 },
	controls: {
		x: { type: 'range', min: 0, max: 100, step: 1 },
		y: { type: 'range', min: 0, max: 40, step: 1 },
		fill: { type: 'text' },
		'font-size': { type: 'number', min: 2, max: 20, step: 1 },
		'text-anchor': { type: 'select', options: ['start', 'middle', 'end'] },
		opacity: { type: 'range', min: 0, max: 1, step: 0.1 }
	},
	presets: {
		'Value at end': { x: 90, 'text-anchor': 'end' },
		Caption: { y: 35, 'font-size': 6, opacity: 0.6 }
	},
	content: [{ kind: 'text', value: 'Ось X' }],
	context: {
		kind: 'element',
		tag: 'svg',
		attrs: { viewBox: '0 0 100 40', width: 200, height: 80 },
		children: [{ kind: 'outlet' }]
	},
	layout: 'centered'
} satisfies ContractStory<RecipeSvgText>;
