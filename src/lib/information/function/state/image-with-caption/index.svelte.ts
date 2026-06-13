import type { ContractImageWithCaption as ImageWithCaptionContract } from '$stylist/media/interface/contract/image-with-caption';

export function createImageWithCaptionState(props: ImageWithCaptionContract) {
	const rounded = $derived(props.rounded ?? false);
	const bordered = $derived(props.bordered ?? false);
	const shadow = $derived(props.shadow ?? true);
	const hostClasses = $derived(
		[
			'image-with-caption',
			rounded ? 'image-with-caption--rounded' : '',
			bordered ? 'image-with-caption--bordered' : '',
			shadow ? 'image-with-caption--shadow' : '',
			props.class ?? ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const imageClasses = $derived(
		[
			'image-with-caption__image',
			rounded ? 'image-with-caption__image--rounded' : '',
			bordered ? 'image-with-caption__image--bordered' : '',
			props.imageClass ?? ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const captionClasses = $derived(
		['image-with-caption__caption', props.captionClass ?? ''].filter(Boolean).join(' ')
	);

	return {
		get hostClasses() {
			return hostClasses;
		},
		get imageClasses() {
			return imageClasses;
		},
		get captionClasses() {
			return captionClasses;
		}
	};
}

export default createImageWithCaptionState;
