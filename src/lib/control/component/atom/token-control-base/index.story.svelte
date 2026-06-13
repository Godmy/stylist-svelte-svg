<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import TokenControlBase from './index.svelte';
	import type { TokenRadioControlDefinition } from '$stylist/control/type/struct/radio-control-definition';

	const definition: TokenRadioControlDefinition = {
		id: 'token-control-base-spacing',
		functionalTaxonomy: 'architecture',
		tokenFile: 'architecture/spacing',
		tokenName: 'SPACING',
		controlKind: 'radio',
		description: 'Р‘Р°Р·РѕРІС‹Рµ Р·РЅР°С‡РµРЅРёСЏ РѕС‚СЃС‚СѓРїРѕРІ',
		defaultValue: '4px',
		options: [
			{ label: '4px', value: '4px' },
			{ label: '8px', value: '8px' },
			{ label: '12px', value: '12px' },
			{ label: '16px', value: '16px' }
		]
	};
</script>

<Story
	component={TokenControlBase}
	title="Token Control Base"
	category="Atoms/Interaction/Controls"
	description="Р‘Р°Р·РѕРІС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ СѓРїСЂР°РІР»РµРЅРёСЏ С‚РѕРєРµРЅР°РјРё"
	tags={['token', 'control', 'base']}
>
	{#snippet children()}
		<TokenControlBase {definition} layout="inline">
			<div class="_c1">
				{#each definition.options as option}
					<button type="button" class="_c2">
						{option.label}
					</button>
				{/each}
			</div>
		</TokenControlBase>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		gap: 0.5rem;
	}
	._c2 {
		border-radius: 9999px;
		border-width: 1px;
		border-style: solid;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
