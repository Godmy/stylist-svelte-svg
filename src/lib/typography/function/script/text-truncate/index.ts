export function truncateText(value: string | null, maxLength: number): string | null {
	if (value === null) return null;
	return value.length > maxLength ? value.slice(0, maxLength) + '…' : value;
}
