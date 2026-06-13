<script lang="ts">
	import { DOMAIN_SCREEN_LANDING } from '$stylist/domain/const/value/domain-screen-landing';
	import DomainWorkspaceShell from '$stylist/domain/component/organism/domain-workspace-shell/index.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<DomainWorkspaceShell
	tree={data.tree}
	descriptors={data.descriptors}
	initialScreen={DOMAIN_SCREEN_LANDING}
/>
