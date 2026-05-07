export function toNullableNumber(value: unknown): number | null {
	const n = Number(value);
	return isNaN(n) ? null : n;
}
