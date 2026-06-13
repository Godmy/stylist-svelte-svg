import type { RecipeCodeEditor } from '$stylist/development/interface/recipe/code-editor';

export type CodeEditorProps = RecipeCodeEditor & {
	class?: string;
	showCopyButton?: boolean;
};
