import Icon from '$stylist/svg/component/atom/icon/index.svelte';
import type { RecipeIcon } from '$stylist/svg/interface/recipe/icon';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';
import { isIconName } from '$stylist/svg/function/check/icon-name';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';
import { TOKEN_ICON_SIZE } from '$stylist/svg/const/record/icon-size';
import { TOKEN_COLOR_TONE } from '$stylist/design-token/const/array/color-tone';
import { TOKEN_SHAPE } from '$stylist/design-token/const/array/shape';

/** Icon from TOKEN_ICON_REGISTRY, optionally inside a wrapper or circle container. */
export default {
	component: Icon,
	title: 'Icon',
	description: 'Компонент иконки с поддержкой всех иконок из TOKEN_ICON_REGISTRY',
	args: { name: 'search', size: 32, strokeWidth: 1.5, container: 'none', filled: false },
	controls: {
		name: {
			type: 'select',
			label: 'Name',
			description: 'Icon name from the icon registry.',
			options: Object.keys(TOKEN_ICON_REGISTRY).filter(isIconName).sort()
		},
		// xs … 2xl: TOKEN_ICON_SIZE tokens (12 … 40px), then pixel sizes.
		size: {
			type: 'select',
			label: 'Size',
			description: 'Icon size: a token (xs … 2xl) or pixels.',
			options: [
				...(Object.keys(TOKEN_ICON_SIZE) as (keyof typeof TOKEN_ICON_SIZE)[]),
				12,
				16,
				20,
				24,
				32,
				48
			]
		},
		strokeWidth: {
			type: 'range',
			label: 'Stroke Width',
			description: 'Stroke width of the glyph.',
			min: 0.5,
			max: 3,
			step: 0.25
		},
		container: {
			type: 'select',
			label: 'Container',
			description: 'Box around the glyph: none, wrapper or circle.',
			options: ['none', 'wrapper', 'circle']
		},
		// xs … 2xl: the container sizes the circle styles.
		containerSize: {
			type: 'select',
			label: 'Container Size',
			description: 'Size step of the circle container.',
			options: TOKEN_SIZE.slice(0, 6)
		},
		shape: {
			type: 'select',
			label: 'Shape',
			description: 'Corner shape of the container.',
			options: TOKEN_SHAPE
		},
		variant: {
			type: 'select',
			label: 'Variant',
			description: 'Color tone of the glyph.',
			options: TOKEN_COLOR_TONE
		},
		color: { type: 'color', label: 'Color', description: 'Explicit color; wins over the tone.' },
		filled: {
			type: 'boolean',
			label: 'Filled',
			description: 'Fills the circle container with the text color.'
		},
		disabled: { type: 'boolean', label: 'Disabled', description: 'Disables interaction.' },
		isOpen: { type: 'boolean', label: 'Open', description: 'Turns chevron icons up or down' },
		'aria-label': {
			type: 'text',
			label: 'Aria Label',
			description: 'Accessible name; without it the graphic is decorative.'
		}
	},
	presets: {
		Wrapper: { name: 'user', size: 20, container: 'wrapper' },
		Circle: { name: 'user', size: 20, container: 'circle' },
		'Circle filled': { name: 'user', size: 20, container: 'circle', filled: true },
		'Square wrapper': { name: 'settings', size: 20, container: 'wrapper', shape: 'square' },
		Primary: { name: 'info', variant: 'primary' },
		Danger: { name: 'alert-circle', variant: 'danger' },
		'Chevron open': { name: 'chevron-down', isOpen: true },
		Disabled: { name: 'user', size: 20, container: 'circle', disabled: true }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeIcon>;
