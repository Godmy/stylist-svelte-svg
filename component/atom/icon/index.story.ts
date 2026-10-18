import Icon from './index.svelte';
import type { RecipeIcon } from '$stylist/svg/interface/recipe/icon';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';

/** Icon from TOKEN_ICON_REGISTRY, optionally inside a wrapper or circle container. */
export default {
	component: Icon,
	title: 'Icon',
	description: 'Компонент иконки с поддержкой всех иконок из TOKEN_ICON_REGISTRY',
	args: { name: 'search', size: 32, strokeWidth: 1.5, container: 'none', filled: false },
	controls: {
		name: { type: 'select', options: Object.keys(TOKEN_ICON_REGISTRY).sort() },
		// xs … 2xl: the size tokens the recipe accepts, then pixel sizes.
		size: { type: 'select', options: [...TOKEN_SIZE.slice(0, 6), 12, 16, 20, 24, 32, 48] },
		strokeWidth: { type: 'range', min: 0.5, max: 3, step: 0.25 },
		container: { type: 'select', options: ['none', 'wrapper', 'circle'] },
		// xs … 2xl: the container sizes the circle styles.
		containerSize: { type: 'select', options: TOKEN_SIZE.slice(0, 6) },
		filled: { type: 'boolean' },
		disabled: { type: 'boolean' },
		isOpen: { type: 'boolean', description: 'Turns chevron icons up or down' },
		'aria-label': { type: 'text' }
	},
	presets: {
		Wrapper: { name: 'user', size: 20, container: 'wrapper' },
		Circle: { name: 'user', size: 20, container: 'circle' },
		'Circle filled': { name: 'user', size: 20, container: 'circle', filled: true }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeIcon>;
