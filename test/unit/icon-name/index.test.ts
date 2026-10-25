import { describe, expect, it } from 'vitest';
import iconNameSource from '$stylist/svg/type/alias/icon-name/index.ts?raw';
import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';
import { TOKEN_ICON_SIZE } from '$stylist/svg/const/record/icon-size';
import { isIconName } from '$stylist/svg/function/check/icon-name';

describe('svg icon names', () => {
	it('TokenIconName lists exactly the icon files in svg/data/icon', () => {
		const declared = [...iconNameSource.matchAll(/\|\s*'([^']+)'/g)].map((match) => match[1]);
		const files = Object.keys(TOKEN_ICON_REGISTRY).sort();
		const missing = files.filter((name) => !declared.includes(name));
		const extra = declared.filter((name) => !files.includes(name));
		const hint =
			'TokenIconName is out of sync with svg/data/icon; run `node scripts/write-icon-names.mjs` ' +
			`from stylist-svelte. Missing: [${missing.join(', ')}]; without a file: [${extra.join(', ')}]`;
		expect(declared, hint).toEqual(files);
	});

	it('isIconName accepts existing icons only', () => {
		expect(isIconName('chevron-left')).toBe(true);
		expect(isIconName('box')).toBe(true);
		expect(isIconName('ChevronLeft')).toBe(false);
		expect(isIconName('no-such-icon')).toBe(false);
		expect(isIconName('toString')).toBe(false);
		expect(isIconName(undefined)).toBe(false);
	});

	it('every size token is a positive pixel size growing with the token', () => {
		const sizes = Object.values(TOKEN_ICON_SIZE);
		expect(Object.keys(TOKEN_ICON_SIZE)).toEqual(['xs', 'sm', 'md', 'lg', 'xl', '2xl']);
		expect(sizes.every((size) => size > 0)).toBe(true);
		expect(sizes).toEqual([...sizes].sort((a, b) => a - b));
	});
});
