<script lang="ts">
	import { ThemeSwitcher } from '$stylist';

	let theme = $state<'minimal' | 'ocean' | 'forest' | 'sunset'>('minimal');
	let changeCount = $state(0);

	function handleThemeChange(nextTheme: 'minimal' | 'ocean' | 'forest' | 'sunset') {
		theme = nextTheme;
		changeCount += 1;
	}
</script>

<ThemeSwitcher themeScheme={theme} themeMode="light" onThemeSchemeChange={handleThemeChange} />

<output data-testid="theme-switcher-value">{theme}</output>
<output data-testid="theme-switcher-count">{changeCount}</output>
