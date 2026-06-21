import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export type CodeBlockRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & BehaviorBorderToken & BehaviorTypography;
