import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ThemeContextMoleculesHarness from 'stylist-test/theme/theme-context-molecules-harness.svelte';

describe('theme consumer molecules', () => {
	it('exposes theme context through ThemeContext', () => {
		render(ThemeContextMoleculesHarness);

		expect(screen.getByTestId('theme-context-mode').textContent).toBe('dark');
	});

	it('renders header, content and footer snippets through ThemeSurface', () => {
		render(ThemeContextMoleculesHarness);

		expect(screen.getByTestId('theme-surface-header').textContent).toBe('dark');
		expect(screen.getByTestId('theme-surface-content').textContent).toBe('dark');
		expect(screen.getByTestId('theme-surface-footer').textContent).toBe('dark');
	});
});
