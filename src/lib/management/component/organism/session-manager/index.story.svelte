<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { Session } from '$stylist/management/type/struct/settings-session';
	import SessionManager from './index.svelte';

	const activeSessions: Session[] = [
		{
			id: '1',
			device: 'Chrome on Windows',
			location: 'New York, USA',
			ip: '192.168.1.1',
			lastActive: 'Now',
			current: true
		},
		{
			id: '2',
			device: 'Safari on iPhone',
			location: 'London, UK',
			ip: '192.168.1.2',
			lastActive: '2 hours ago',
			current: false
		},
		{
			id: '3',
			device: 'Firefox on MacOS',
			location: 'Paris, France',
			ip: '192.168.1.3',
			lastActive: '1 day ago',
			current: false
		}
	];
</script>

<Story
	id="organisms-session-manager"
	title="Organisms / Interaction / Forms / Session Manager"
	component={SessionManager}
	category="Organisms/Interaction/Forms"
	description="A session manager component for viewing and managing active user sessions."
	tags={['session', 'security', 'manager', 'devices']}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-session-manager _c1">
			<h1 class="_c1">SessionManager Component</h1>

			<div class="_c2">
				<h2 class="_c3">Interactive SessionManager</h2>
				<div class="_c4">
					<SessionManager activeSessions={activeSessions.length} />
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
		max-width: 42rem;
	}

	._c1 {
		padding: 1rem;
	}
	._c1 > * + * {
		margin-top: 1.5rem;
	}
</style>
