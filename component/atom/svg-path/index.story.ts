import SvgPath from './index.svelte';
import type { RecipeSvgPath } from '$stylist/svg/interface/recipe/svg-path';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Typed thin wrapper over the native `<path>`; the context supplies the `<svg>`. */
export default {
	component: SvgPath,
	title: 'SvgPath',
	description:
		'Типизированная тонкая обёртка над нативным <path> — примитив для ручной отрисовки графиков и диаграмм',
	args: {
		d: 'M2 30 L20 10 L40 25 L60 5 L80 20 L98 8',
		stroke: 'currentColor',
		'stroke-width': 2,
		fill: 'none'
	},
	controls: {
		d: { type: 'text' },
		fill: { type: 'text' },
		stroke: { type: 'text' },
		'stroke-width': { type: 'number', min: 0, max: 8, step: 0.5 }
	},
	presets: {
		Area: { d: 'M2 38 L2 30 L20 10 L40 25 L60 5 L80 20 L98 8 L98 38 Z', fill: 'currentColor' }
	},
	context: {
		kind: 'element',
		tag: 'svg',
		attrs: { viewBox: '0 0 100 40', width: 200, height: 80 },
		children: [{ kind: 'outlet' }]
	},
	layout: 'centered'
} satisfies ContractStory<RecipeSvgPath>;
