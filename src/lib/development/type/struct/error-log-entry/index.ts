import type { ErrorLogSource } from '../../enum/error-log-source';

export type ErrorLogEntry = {
	timestamp: string;
	source: ErrorLogSource;
	routeId: string | null;
	url: string | null;
	method: string | null;
	message: string;
	stack: string | null;
	name: string | null;
	status: number | null;
	details: Record<string, unknown>;
};
