import type { TOKEN_TREND } from '$stylist/management/const/enum/trend';

export const STATS_CARD_TREND_ICON: Record<(typeof TOKEN_TREND)[number], string> = {
	up: 'arrow-up',
	down: 'arrow-down',
	neutral: 'minus'
} as const;
