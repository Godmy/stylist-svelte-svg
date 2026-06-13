<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import UserProfileCard from './index.svelte';
</script>

<Story
	id="organisms-user-profile-card"
	title="Organisms / Interaction / Forms / Account / User Profile Card"
	component={UserProfileCard}
	category="Organisms/Interaction/Forms/Account"
	description="A user profile card component for displaying and editing user information."
	tags={['profile', 'user', 'card', 'account']}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-user-profile-card _c1">
			<h1 class="_c1">UserProfileCard Component</h1>

			<div class="_c2">
				<h2 class="_c3">Interactive UserProfileCard</h2>
				<div class="max-w-sm">
					<UserProfileCard />
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

	._c1 {
		padding: 1rem;
	}
	._c1 > * + * {
		margin-top: 1.5rem;
	}
</style>
