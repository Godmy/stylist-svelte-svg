<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import SecuritySettingsComponent from './index.svelte';

	type Props = {
		showPasswordChange: boolean;
		showTwoFactor: boolean;
		showSessionManagement: boolean;
		showLoginHistory: boolean;
		showSecurityLevel: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showPasswordChange', type: 'boolean', defaultValue: true },
		{ name: 'showTwoFactor', type: 'boolean', defaultValue: true },
		{ name: 'showSessionManagement', type: 'boolean', defaultValue: true },
		{ name: 'showLoginHistory', type: 'boolean', defaultValue: true },
		{ name: 'showSecurityLevel', type: 'boolean', defaultValue: true }
	];

	function handleSubmit(settings: unknown) {
		console.log('Security settings submitted:', settings);
		alert('Security settings saved!');
	}

	function handleEnableTwoFactor() {
		console.log('Two-factor authentication enabled');
	}

	function handleChangePassword() {
		console.log('Password change requested');
	}
</script>

<Story
	id="organisms-security-settings"
	title="Organisms / Interaction / Forms / Settings / Security Settings"
	component={SecuritySettingsComponent}
	category="Organisms/Interaction/Forms/Settings"
	description="A security settings component for managing password, 2FA, and security preferences."
	tags={['settings', 'security', 'password', '2fa']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-security-settings _c1">
			<h1 class="_c1">SecuritySettings Component</h1>

			<div class="_c2">
				<h2 class="_c3">Interactive SecuritySettings</h2>
				<div class="_c4">
					<SecuritySettingsComponent />
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
		max-width: 28rem;
	}

	._c1 {
		padding: 1.5rem;
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
	}
</style>
