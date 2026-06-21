import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export type FRIEND_LIST_REST_PROPS = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & BehaviorBorderToken & BehaviorTypography;
