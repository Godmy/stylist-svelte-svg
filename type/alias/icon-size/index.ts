import type { TOKEN_ICON_SIZE } from '$stylist/svg/const/record/icon-size';

/** Icon size: a token from TOKEN_ICON_SIZE or a positive number of pixels. */
export type TokenIconSize = keyof typeof TOKEN_ICON_SIZE | number;
