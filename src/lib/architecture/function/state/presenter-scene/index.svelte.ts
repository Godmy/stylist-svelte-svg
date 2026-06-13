import { projectSceneCoordinate } from '$stylist/architecture/function/script/project-scene-coordinate';
import { resolvePresenterSceneLinks } from '$stylist/architecture/function/script/scene/presenter';
import useCamera from '$stylist/architecture/function/state/camera/index.svelte';
import type { RecipePresenterScene } from '$stylist/architecture/interface/recipe/presenter-scene';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { SceneCamera } from '$stylist/architecture/type/struct/scene-camera';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/scene-node';

export function createPresenterSceneState(props: RecipePresenterScene) {
	let selectedNodeId = $state(props.nodes?.[0]?.id ?? '');
	let isDragging = $state(false);
	let dragOriginX = $state(0);
	let dragOriginY = $state(0);

	const cameraState = useCamera(props.camera ?? {});
	const camera = $derived.by<SceneCamera>(() => cameraState.camera);
	const title = $derived(props.title ?? 'Presenter Scene');
	const sectionClass = $derived(mergeClassNames('presenter-scene', String(props.class ?? '')));
	const viewportClass = $derived(
		mergeClassNames('presenter-scene__viewport', isDragging && 'dragging')
	);
	const selectedNode = $derived(
		props.nodes?.find((node) => node.id === selectedNodeId) ?? props.nodes?.[0] ?? null
	);
	const sceneLinks = $derived.by(() => resolvePresenterSceneLinks(props.nodes ?? []));
	const showHeader = $derived(props.showHeader ?? true);
	const showDepthControls = $derived(props.showDepthControls ?? true);
	const showGrid = $derived(props.showGrid ?? true);
	const showLinks = $derived(props.showLinks ?? true);
	const showInspector = $derived(props.showInspector ?? true);

	$effect(() => {
		cameraState.setDepth(props.camera?.depth ?? 500);
		cameraState.setZoom(props.camera?.zoom ?? 1);
	});

	$effect(() => {
		selectedNodeId = props.nodes?.[0]?.id ?? '';
	});

	function viewport(node: HTMLDivElement) {
		const syncViewportSize = () => {
			cameraState.setViewportSize(node.clientWidth, node.clientHeight);
		};

		syncViewportSize();

		const observer = new ResizeObserver(() => {
			syncViewportSize();
		});

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}

	function setViewportSize(width: number, height: number): void {
		cameraState.setViewportSize(width, height);
	}

	function focusNode(node: SceneNode): void {
		selectedNodeId = node.id;
		cameraState.focusNode(node);
		props.onfocusnode?.(node);
	}

	function stepDepth(delta: number): void {
		cameraState.setDepth(camera.depth + delta);
	}

	function resetCamera(): void {
		cameraState.reset({
			depth: props.camera?.depth,
			zoom: props.camera?.zoom,
			viewportWidth: camera.viewportWidth,
			viewportHeight: camera.viewportHeight
		});
	}

	function handleWheel(event: WheelEvent): void {
		event.preventDefault();
		const bounds = (event.currentTarget as HTMLDivElement | null)?.getBoundingClientRect();
		if (!bounds) return;

		cameraState.zoomAtPoint(
			event.deltaY < 0 ? 0.12 : -0.12,
			event.clientX - bounds.left,
			event.clientY - bounds.top
		);
	}

	function handlePointerDown(event: PointerEvent): void {
		isDragging = true;
		dragOriginX = event.clientX;
		dragOriginY = event.clientY;
		(event.currentTarget as HTMLElement | null)?.setPointerCapture?.(event.pointerId);
	}

	function handlePointerMove(event: PointerEvent): void {
		if (!isDragging) return;

		const dx = (event.clientX - dragOriginX) / camera.zoom;
		const dy = (event.clientY - dragOriginY) / camera.zoom;

		cameraState.panBy(-dx, -dy);
		dragOriginX = event.clientX;
		dragOriginY = event.clientY;
	}

	function handlePointerUp(): void {
		isDragging = false;
	}

	function handleKeyDown(event: KeyboardEvent): void {
		switch (event.key) {
			case 'ArrowLeft':
				event.preventDefault();
				cameraState.panBy(-60 / camera.zoom, 0);
				break;
			case 'ArrowRight':
				event.preventDefault();
				cameraState.panBy(60 / camera.zoom, 0);
				break;
			case 'ArrowUp':
				event.preventDefault();
				cameraState.panBy(0, -60 / camera.zoom);
				break;
			case 'ArrowDown':
				event.preventDefault();
				cameraState.panBy(0, 60 / camera.zoom);
				break;
			case '+':
			case '=':
				event.preventDefault();
				cameraState.zoomAtPoint(0.12, camera.viewportWidth / 2, camera.viewportHeight / 2);
				break;
			case '-':
			case '_':
				event.preventDefault();
				cameraState.zoomAtPoint(-0.12, camera.viewportWidth / 2, camera.viewportHeight / 2);
				break;
			case '0':
				event.preventDefault();
				resetCamera();
				break;
		}
	}

	function projectX(x: number): number {
		return projectSceneCoordinate(x, camera.x, camera.zoom);
	}

	function projectY(y: number): number {
		return projectSceneCoordinate(y, camera.y, camera.zoom);
	}

	return {
		get camera() {
			return camera;
		},
		get title() {
			return title;
		},
		get isDragging() {
			return isDragging;
		},
		get sectionClass() {
			return sectionClass;
		},
		get viewportClass() {
			return viewportClass;
		},
		get selectedNodeId() {
			return selectedNodeId;
		},
		get selectedNode() {
			return selectedNode;
		},
		get sceneLinks() {
			return sceneLinks;
		},
		get showHeader() {
			return showHeader;
		},
		get showDepthControls() {
			return showDepthControls;
		},
		get showGrid() {
			return showGrid;
		},
		get showLinks() {
			return showLinks;
		},
		get showInspector() {
			return showInspector;
		},
		viewport,
		setViewportSize,
		focusNode,
		stepDepth,
		resetCamera,
		handleWheel,
		handlePointerDown,
		handlePointerMove,
		handlePointerUp,
		handleKeyDown,
		projectX,
		projectY
	};
}

export default createPresenterSceneState;
