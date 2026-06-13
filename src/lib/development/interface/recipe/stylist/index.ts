import type { Props as LegacyStylistProps23 } from '$stylist/development/type/alias/props';
import type { StylistProps as LegacyStylistProps21 } from '$stylist/development/type/struct/stylist-props';
import type { ResourceOptimizerProps as LegacyStylistProps20 } from '$stylist/development/type/struct/resource-optimizer-props';
import type { PrivacySettingsProps as LegacyStylistProps19 } from '$stylist/development/type/struct/privacy-settings-props';
import type { MockDataSelectorProps as LegacyStylistProps18 } from '$stylist/development/type/struct/mock-data-selector-props';
import type { DevelopmentErrorBoundaryProps as LegacyStylistProps16 } from '$stylist/development/type/struct/development-error-boundary-props';
import type { DesignTokensProps as LegacyStylistProps15 } from '$stylist/development/type/struct/design-tokens-props';
import type { DebugConsoleProps as LegacyStylistProps14 } from '$stylist/development/type/struct/debug-console-props';
import type { CopyableCodeBlockRestProps as LegacyStylistProps13 } from '$stylist/development/type/struct/copyable-code-block-rest-props';
import type { CopyableCodeBlockProps as LegacyStylistProps12 } from '$stylist/development/type/struct/copyable-code-block-props';
import type { ComponentLibraryStatsProps as LegacyStylistProps11 } from '$stylist/development/type/struct/component-library-stats-props';
import type { CodeWithCopyProps as LegacyStylistProps10 } from '$stylist/development/type/struct/code-with-copy-props';
import type { CodeSectionProps as LegacyStylistProps9 } from '$stylist/development/type/struct/code-section-props';
import type { CodeEditorProps as LegacyStylistProps8 } from '$stylist/development/type/struct/code-editor-props';
import type { CodeDiffRestProps as LegacyStylistProps7 } from '$stylist/development/type/struct/code-diff-rest-props';
import type { CodeDiffProps as LegacyStylistProps6 } from '$stylist/development/type/struct/code-diff-props';
import type { CodeBlockWithLineNumbersRestProps as LegacyStylistProps5 } from '$stylist/development/type/struct/code-block-with-line-numbers-rest-props';
import type { CodeBlockWithLineNumbersProps as LegacyStylistProps4 } from '$stylist/development/type/struct/code-block-with-line-numbers-props';
import type { CodeBlockRestProps as LegacyStylistProps3 } from '$stylist/development/type/struct/code-block-rest-props';
import type { CodeBlockProps as LegacyStylistProps2 } from '$stylist/development/type/struct/code-block-props';
import type { AtomicPrinciplesShowcaseProps as LegacyStylistProps1 } from '$stylist/development/type/struct/atomic-principles-showcase-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipeStylist
	extends StructIntersectAll<
		[
			LegacyStylistProps23,
			LegacyStylistProps21,
			LegacyStylistProps20,
			LegacyStylistProps19,
			LegacyStylistProps18,
			LegacyStylistProps16,
			LegacyStylistProps15,
			LegacyStylistProps14,
			LegacyStylistProps13,
			LegacyStylistProps12,
			LegacyStylistProps11,
			LegacyStylistProps10,
			LegacyStylistProps9,
			LegacyStylistProps8,
			LegacyStylistProps7,
			LegacyStylistProps6,
			LegacyStylistProps5,
			LegacyStylistProps4,
			LegacyStylistProps3,
			LegacyStylistProps2,
			LegacyStylistProps1,
			Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>
		]
	> {
	class?: string;
}
