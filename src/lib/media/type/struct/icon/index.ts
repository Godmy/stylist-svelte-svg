import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ContractIcon as IconContract } from '$stylist/media/interface/contract/icon';

export type IconProps = IconContract & HTMLAttributes<HTMLSpanElement> & BehaviorBorderToken & BehaviorTypography;
