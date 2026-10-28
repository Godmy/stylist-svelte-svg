import { describe, expect, it } from 'vitest';

const icons = import.meta.glob<string>('../../../data/icon/*/index.svg', {
	eager: true,
	query: '?raw',
	import: 'default'
});

describe('icon paint sources', () => {
	it('uses palette tokens or currentColor for visible paints throughout the registry', () => {
		for (const [path, source] of Object.entries(icons)) {
			const svg = new DOMParser().parseFromString(source, 'image/svg+xml');
			expect(svg.querySelector('parsererror'), path).toBeNull();
			for (const element of svg.querySelectorAll('*')) {
				// Mask luminance is geometry, not a visible palette color.
				if (element.closest('defs, mask, clipPath')) continue;
				for (const attribute of ['fill', 'stroke', 'stop-color']) {
					const paint = element.getAttribute(attribute);
					if (paint) {
						expect(paint, `${path}: ${attribute}`).toMatch(
							/^(none|currentColor|transparent|inherit|var\(--color-|url\()/
						);
					}
				}
				for (const [, paint] of (element.getAttribute('style') ?? '').matchAll(
					/(?:^|;)\s*(?:color|fill|stroke|stop-color)\s*:\s*([^;]+)/g
				)) {
					expect(paint, `${path}: style`).toMatch(
						/^(none|currentColor|transparent|inherit|var\(--color-icon-)/
					);
				}
			}
		}
	});
});
