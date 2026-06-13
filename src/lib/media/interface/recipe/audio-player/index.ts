import type { AudioPlayerProps as LegacyAudioPlayerProps1 } from '$stylist/media/interface/recipe/audio-player-audio-player-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractAudioPlayer } from '$stylist/media/interface/contract/audio-player';

export interface RecipeAudioPlayer
	extends StructIntersectAll<[LegacyAudioPlayerProps1, ContractAudioPlayer]> {}
