<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import type { AccountSettings } from '$stylist/management/type/struct/settings/account-settings';
	import AccountSettingsForm from './index.svelte';

	type Props = {
		showEmailChange: boolean;
		showPasswordChange: boolean;
		showDeleteAccount: boolean;
		showTwoFactor: boolean;
		loading: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showEmailChange', type: 'boolean', defaultValue: true },
		{ name: 'showPasswordChange', type: 'boolean', defaultValue: true },
		{ name: 'showDeleteAccount', type: 'boolean', defaultValue: true },
		{ name: 'showTwoFactor', type: 'boolean', defaultValue: true },
		{ name: 'loading', type: 'boolean', defaultValue: false }
	];

	function handleSubmit(settings: AccountSettings) {
		console.log('Account settings submitted:', settings);
		alert('Account settings saved!');
	}

	function handleDeleteAccount() {
		console.log('Delete account requested');
		if (confirm('Are you sure you want to delete your account?')) {
			alert('Account deletion initiated');
		}
	}
</script>

<Story
	id="organisms-account-settings-form"
	title="Organisms / Interaction / Forms / Account / Account Settings Form"
	component={AccountSettingsForm}
	category="Organisms/Interaction/Forms/Account"
	description="An account settings form for managing user account preferences and security settings."
	tags={['form', 'account', 'settings', 'security']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-account-settings-form _c1">
			<h1 class="_c1">AccountSettingsForm Component</h1>

			<div class="_c2">
				<h2 class="_c3">Interactive AccountSettingsForm</h2>
				<div class="_c4">
					<AccountSettingsForm />
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c2 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c3 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c4 {
		max-width: 32rem;
	}

	._c1 {
		padding: 1rem;
	}
	._c1 > * + * {
		margin-top: 1.5rem;
	}
</style>
