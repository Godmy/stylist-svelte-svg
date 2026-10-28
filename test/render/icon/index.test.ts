import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { cleanup, render, waitFor } from '@testing-library/svelte';
import Icon from '$stylist/svg/component/atom/icon/index.svelte';
import type { ComponentProps } from 'svelte';
import { TOKEN_ICON_SIZE } from '$stylist/svg/const/record/icon-size';
import { resolveIconSvg } from '$stylist/svg/function/async/resolve-icon-svg';

// The first lazy import of an svg can outlast waitFor's 1s default in a full run; load it once here.
beforeAll(async () => {
	await resolveIconSvg('search');
});

afterEach(() => {
	cleanup();
	vi.restoreAllMocks();
});

async function renderSvg(props: ComponentProps<typeof Icon>) {
	const view = render(Icon, { props });
	await waitFor(() => expect(view.container.querySelector('svg')).toBeTruthy(), { timeout: 3000 });
	return view.container.querySelector('svg')!;
}

describe('Icon size', () => {
	it.each(Object.entries(TOKEN_ICON_SIZE))('token %s renders %ipx', async (token, pixels) => {
		const svg = await renderSvg({ name: 'search', size: token as keyof typeof TOKEN_ICON_SIZE });
		expect(svg.getAttribute('width')).toBe(`${pixels}px`);
		expect(svg.getAttribute('height')).toBe(`${pixels}px`);
	});

	it('keeps numeric sizes', async () => {
		expect((await renderSvg({ name: 'search', size: 18 })).getAttribute('width')).toBe('18px');
	});

	it.each([undefined, 0, -4])('falls back to md for size %s', async (size) => {
		const svg = await renderSvg({ name: 'search', size });
		expect(svg.getAttribute('width')).toBe(`${TOKEN_ICON_SIZE.md}px`);
	});

	it('sizes the loading skeleton too', () => {
		const view = render(Icon, { props: { name: 'search', size: 'lg' } });
		const skeleton = view.container.querySelector<HTMLElement>('.icon__skeleton');
		expect(skeleton?.style.width).toBe(`${TOKEN_ICON_SIZE.lg}px`);
	});
});

describe('Icon name', () => {
	it('warns in dev about an unknown name and renders box', async () => {
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const svg = await renderSvg({ name: 'no-such-icon' as ComponentProps<typeof Icon>['name'] });
		expect(warn).toHaveBeenCalledWith(expect.stringContaining('no-such-icon'));
		expect(svg).toBeTruthy();
	});

	it('does not warn for a known name', async () => {
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
		await renderSvg({ name: 'chevron-left' });
		expect(warn).not.toHaveBeenCalled();
	});
});

describe('Icon palette overrides', () => {
	it('keeps an explicit color above the default palette and variant', async () => {
		const svg = await renderSvg({ name: 'search', color: 'rebeccapurple', variant: 'success' });
		const wrapper = svg.closest<HTMLElement>('.icon-wrap')!;
		expect(wrapper.style.color).toBe('rebeccapurple');
		expect(wrapper.classList.contains('icon--tone-success')).toBe(true);
	});

	it('keeps both color roles in a multicolor glyph', async () => {
		const svg = await renderSvg({ name: 'accordion' });
		expect(svg.getAttribute('stroke')).toBe('currentColor');
		expect(svg.querySelector('rect[y="10"]')?.getAttribute('style')).toContain(
			'var(--color-icon-secondary, currentColor)'
		);
	});
});
