<script lang="ts">
	import { ThemeProvider, ThemeContext, ThemeSurface } from '$stylist';
</script>

<ThemeProvider themeMode="dark">
	<ThemeContext>
		{#snippet children(themeContext)}
			<div data-testid="theme-context-mode">{themeContext?.themeMode ?? 'missing'}</div>
		{/snippet}
	</ThemeContext>

	<ThemeSurface>
		{#snippet header(themeContext)}
			<div data-testid="theme-surface-header">{themeContext?.theme.mode ?? 'missing'}</div>
		{/snippet}

		{#snippet content(themeContext)}
			<div data-testid="theme-surface-content">{themeContext?.themeMode ?? 'missing'}</div>
		{/snippet}

		{#snippet footer(themeContext)}
			<div data-testid="theme-surface-footer">{themeContext?.theme.mode ?? 'missing'}</div>
		{/snippet}
	</ThemeSurface>
</ThemeProvider>
