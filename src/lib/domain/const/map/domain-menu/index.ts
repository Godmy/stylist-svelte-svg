import type { SlotSvgName } from '$stylist/media/interface/slot/svg-name';

export const DOMAIN_MENU_ICONS: readonly SlotSvgName[] = [
	{ name: 'dashboard', svg: 'layout-dashboard' },
	{ name: 'builder', svg: 'hammer' },
	{ name: 'backlog', svg: 'list-checks' },
	{ name: 'diagnostics', svg: 'activity' },
	{ name: 'settings', svg: 'settings' }
] as const;
