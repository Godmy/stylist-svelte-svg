import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ContractAvatar as AvatarContract } from '$stylist/media/interface/contract/avatar';

export type AvatarProps = AvatarContract & HTMLAttributes<HTMLDivElement> & BehaviorBorderToken & BehaviorTypography;
