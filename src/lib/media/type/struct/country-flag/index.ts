import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { RecipeCountryFlag } from '$stylist/media/interface/recipe/country-flag';

export type CountryFlagProps = RecipeCountryFlag & HTMLAttributes<HTMLSpanElement> & BehaviorBorderToken & BehaviorTypography;
