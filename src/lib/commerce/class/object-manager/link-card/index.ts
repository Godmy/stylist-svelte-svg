import type { RecipeLinkCard as RecipeLinkCard } from '$stylist/commerce/interface/recipe/link-card';

export class ObjectManagerLinkCard {
	static readonly arrowIcon = 'arrow-right';

	static getTarget(props: RecipeLinkCard): string {
		return props.newTab ? '_blank' : '_self';
	}

	static getRel(props: RecipeLinkCard): string | undefined {
		return props.newTab ? 'noopener noreferrer' : undefined;
	}

	static getAriaLabel(props: RecipeLinkCard): string {
		return `Link: ${props.title}${props.description ? `, ${props.description}` : ''}`;
	}
}
