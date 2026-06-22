import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export type SideBySideLayoutRestProps = Omit<LayoutHTMLAttributes<HTMLDivElement>, 'class'>;
