import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeCanvasImageEditor } from '$stylist/media/interface/recipe/canvas-image-editor';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export type CanvasImageEditorProps = RecipeCanvasImageEditor &
	LayoutHTMLAttributes<HTMLCanvasElement>;
