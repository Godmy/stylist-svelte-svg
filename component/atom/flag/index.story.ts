import Flag from './index.svelte';
import type { RecipeFlag } from '$stylist/svg/interface/recipe/flag';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_FLAG_REGISTRY } from '$stylist/svg/const/record/flag-registry';
import { TOKEN_SIZE_REM } from '$stylist/design-token/const/array/size-rem';

/** Country flag from TOKEN_FLAG_REGISTRY with a text fallback for unknown codes. */
export default {
	component: Flag,
	title: 'Flag',
	description:
		'Флаг страны по коду из TOKEN_FLAG_REGISTRY с текстовым fallback для неизвестных кодов',
	args: { code: 'es', size: '2rem' },
	controls: {
		code: {
			type: 'text',
			description: 'Country code or a locale such as en-GB (the part after the hyphen is used)'
		},
		flag: {
			type: 'select',
			options: Object.keys(TOKEN_FLAG_REGISTRY).sort(),
			description: 'Flag code, takes priority over code'
		},
		// 1rem … 4rem: the rem sizes a flag is shown at.
		size: {
			type: 'select',
			options: TOKEN_SIZE_REM.filter((size) =>
				['1rem', '1.5rem', '2rem', '3rem', '4rem'].includes(size)
			)
		}
	},
	presets: {
		Locale: { code: 'en-GB' },
		Fallback: { code: 'xx' }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeFlag>;
