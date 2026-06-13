<script lang="ts">
	import { ThemeConsumer } from '$stylist/theme/component/atom/theme-consumer';
	import { ThemeProvider } from '$stylist/theme/component/atom/theme-provider';
</script>

<ThemeProvider themeMode="dark">
	<ThemeConsumer>
		{#snippet children(themeContext)}
			<div
				data-testid="theme-consumer"
				data-theme-mode={themeContext?.themeMode ?? 'missing'}
				data-theme-current-mode={themeContext?.theme.mode ?? 'missing'}
			>
				{themeContext?.themeMode ?? 'missing'}
			</div>
		{/snippet}
	</ThemeConsumer>
</ThemeProvider>
