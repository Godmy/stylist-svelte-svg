<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import SecureForm from './index.svelte';

	type Props = {
		showEncryption: boolean;
		showSecureIndicator: boolean;
		autoLock: boolean;
		sessionTimeout: number;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showEncryption', type: 'boolean', defaultValue: true },
		{ name: 'showSecureIndicator', type: 'boolean', defaultValue: true },
		{ name: 'autoLock', type: 'boolean', defaultValue: true },
		{ name: 'sessionTimeout', type: 'number', defaultValue: 300 }
	];

	function handleSubmit(data: any) {
		console.log('Secure form submitted:', data);
		alert('Secure form submitted successfully!');
	}

	function handleSessionExpired() {
		console.log('Session expired');
		alert('Session expired. Please login again.');
	}
</script>

<Story
	id="organisms-secure-form"
	title="Organisms / Interaction / Forms / Secure Form"
	component={SecureForm}
	category="Organisms/Interaction/Forms"
	description="A secure form component with encryption and session management for sensitive data."
	tags={['form', 'secure', 'encryption', 'session']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-secure-form _c1">
			<h1 class="_c2">SecureForm Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive SecureForm</h2>
				<div class="_c5">
					<SecureForm />
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
		border-width: 2px;
		border-style: solid;
		border-color: var(--color-success-200);
		border-radius: 0.5rem;
		background-color: var(--color-success-50);
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		max-width: 28rem;
	}
</style>
