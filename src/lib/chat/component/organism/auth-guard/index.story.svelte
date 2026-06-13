<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import AuthGuard from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'isAuthenticated', type: 'boolean', defaultValue: false },
		{ name: 'requiredRole', type: 'text', defaultValue: 'admin' },
		{ name: 'redirectUrl', type: 'text', defaultValue: '/login' }
	];
</script>

<Story
	id="organisms-auth-guard"
	title="Auth Guard"
	component={AuthGuard}
	category="Organisms"
	description="Protects content based on authentication and role requirements."
	tags={['auth', 'permissions', 'security']}
	{controls}
>
	{#snippet children(values: any)}
		<section class="sb-organisms-auth-guard _c1">
			<AuthGuard
				isAuthenticated={values.isAuthenticated}
				requiredRole={values.requiredRole}
				userRoles={values.isAuthenticated ? ['member', 'admin'] : []}
				redirectUrl={values.redirectUrl}
			>
				<article class="_c2">
					<h3 class="_c3 font-[--font-weight-semibold]">Protected panel</h3>
					<p class="_c4">
						This content is visible only when the user is authenticated and has the required role.
					</p>
				</article>
			</AuthGuard>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1.5rem;
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c2 {
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.25rem;
	}
	._c3 {
		color: var(--text-size-lg);
	}
	._c4 {
		margin-top: 0.5rem;
		color: var(--text-size-sm);
	}
</style>
