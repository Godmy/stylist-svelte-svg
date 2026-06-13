<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import StylistTab from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const customItems = [
		{ id: 'dashboard', label: 'Dashboard', icon: 'grid-layout' },
		{ id: 'analytics', label: 'Analytics', icon: 'chart' },
		{ id: 'settings', label: 'Settings', icon: 'settings' },
		{ id: 'profile', label: 'Profile', icon: 'user' }
	];

	const controls = [
		{
			name: 'selectedId',
			type: 'text' as TokenControllerType,
			defaultValue: 'architecture',
			description: 'ID РІС‹Р±СЂР°РЅРЅРѕРіРѕ С‚Р°Р±Р°'
		}
	];

	function handleSelect(item: { id: string; label: string; icon: string }) {
		console.log(`Selected tab: ${item.label} (${item.id})`);
	}
</script>

<Story
	{controls}
	title="RecipeStylist Tab"
	description="РљРѕРјРїРѕРЅРµРЅС‚ РїРµСЂРµРєР»СЋС‡РµРЅРёСЏ С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹С… С‚Р°РєСЃРѕРЅРѕРјРёР№ СЃ Р°РЅРёРјР°С†РёРµР№"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<h3 class="_c2">Functional Taxonomy Tabs</h3>
			<StylistTab selectedId={controlValues.selectedId} onSelect={handleSelect} />

			<h3 class="_c3">Custom Items</h3>
			<StylistTab items={customItems as any} selectedId="dashboard" onSelect={handleSelect} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
</style>
