import { resolveFlagSvg } from '$stylist/svg/function/async/resolve-flag-svg';
import type { RecipeFlag } from '$stylist/svg/interface/recipe/flag';

export function createFlagState(props: RecipeFlag) {
	const flag = $derived(props.flag);
	const code = $derived(props.code);
	const size = $derived(props.size ?? '1.5rem');
	const className = $derived(props.class ?? '');

	const normalizedFlag = $derived((flag ?? code ?? '').trim().toLowerCase());
	const normalizedCode = $derived((code ?? '').split('-').pop()?.trim().toLowerCase() ?? '');
	const fallback = $derived((flag ?? code ?? '').trim().toUpperCase());
	const rootClass = $derived(['flag', className].filter(Boolean).join(' '));

	let loadedSvg = $state<string | undefined>(undefined);
	let isLoading = $state(true);

	$effect(() => {
		const requestedFlag = normalizedFlag;
		const requestedCode = normalizedCode;

		isLoading = true;
		let cancelled = false;

		resolveFlagSvg(requestedFlag)
			.then((resolved) => resolved ?? resolveFlagSvg(requestedCode))
			.then((resolved) => {
				if (!cancelled) {
					loadedSvg = resolved;
					isLoading = false;
				}
			});

		return () => {
			cancelled = true;
		};
	});

	const svg = $derived(loadedSvg);

	const restProps = $derived.by(() => {
		const { class: _class, flag: _flag, code: _code, size: _size, ...rest } = props;
		return rest;
	});

	return {
		get size() {
			return size;
		},
		get svg() {
			return svg;
		},
		get isLoading() {
			return isLoading;
		},
		get fallback() {
			return fallback;
		},
		get rootClass() {
			return rootClass;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createFlagState;
