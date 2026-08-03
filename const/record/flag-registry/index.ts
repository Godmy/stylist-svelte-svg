import { FLAG_CN } from '$stylist/svg/const/record/flag-cn';
import { FLAG_DE } from '$stylist/svg/const/record/flag-de';
import { FLAG_ES } from '$stylist/svg/const/record/flag-es';
import { FLAG_FR } from '$stylist/svg/const/record/flag-fr';
import { FLAG_GB } from '$stylist/svg/const/record/flag-gb';
import { FLAG_IT } from '$stylist/svg/const/record/flag-it';
import { FLAG_JP } from '$stylist/svg/const/record/flag-jp';
import { FLAG_KR } from '$stylist/svg/const/record/flag-kr';
import { FLAG_RU } from '$stylist/svg/const/record/flag-ru';
import { FLAG_US } from '$stylist/svg/const/record/flag-us';

export const TOKEN_FLAG_REGISTRY = {
	cn: FLAG_CN,
	de: FLAG_DE,
	es: FLAG_ES,
	fr: FLAG_FR,
	gb: FLAG_GB,
	it: FLAG_IT,
	jp: FLAG_JP,
	kr: FLAG_KR,
	ru: FLAG_RU,
	uk: FLAG_GB,
	us: FLAG_US
} as const;
