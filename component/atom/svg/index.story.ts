import Svg from './index.svelte';
import type { RecipeSvg } from '$stylist/svg/interface/recipe/svg';
import type { ContractStory } from '$stylist/html/interface/contract/story';

const layersSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const circleSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>`;
const arrowSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/** Low-level renderer of SVG markup passed as a string. */
export default {
	component: Svg,
	title: 'Svg',
	description: 'Низкоуровневый компонент для рендеринга SVG-разметки через innerHTML',
	args: { svg: layersSvg, size: 48, strokeWidth: 2 },
	controls: {
		svg: { type: 'text', description: 'SVG markup' },
		size: { type: 'range', min: 16, max: 128, step: 4 },
		strokeWidth: { type: 'range', min: 0.5, max: 4, step: 0.5 },
		'aria-label': { type: 'text', description: 'Without a label the SVG is decorative' }
	},
	presets: {
		Circle: { svg: circleSvg },
		Arrow: { svg: arrowSvg, 'aria-label': 'Стрелка вправо' }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeSvg>;
