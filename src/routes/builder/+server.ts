import { appendErrorLog } from '$stylist/server/function/script/append-error-log';
import { getBuilderLayoutResponse } from '$stylist/server/function/async/get-builder-layout-response/index';
import { postBuilderLayoutResponse } from '$stylist/server/function/async/post-builder-layout-response/index';
import { serializeUnknownError } from '$stylist/development/function/script/serialize-unknown-error';
import { json, type RequestEvent } from '@sveltejs/kit';

export function GET(event: RequestEvent) {
	try {
		return getBuilderLayoutResponse();
	} catch (error) {
		const serializedError = serializeUnknownError(error);

		appendErrorLog({
			timestamp: new Date().toISOString(),
			source: 'server',
			routeId: event.route.id ?? null,
			url: event.url.toString(),
			method: event.request.method,
			message: serializedError.message || 'Builder GET failed',
			stack: serializedError.stack,
			name: serializedError.name,
			status: 500,
			details: {
				params: event.params,
				isDataRequest: event.isDataRequest
			}
		});

		return json({ error: serializedError.message || 'Builder GET failed' }, { status: 500 });
	}
}

export async function POST(event: RequestEvent) {
	try {
		return await postBuilderLayoutResponse(event);
	} catch (error) {
		const serializedError = serializeUnknownError(error);

		appendErrorLog({
			timestamp: new Date().toISOString(),
			source: 'server',
			routeId: event.route.id ?? null,
			url: event.url.toString(),
			method: event.request.method,
			message: serializedError.message || 'Builder POST failed',
			stack: serializedError.stack,
			name: serializedError.name,
			status: 500,
			details: {
				params: event.params,
				isDataRequest: event.isDataRequest
			}
		});

		return json({ error: serializedError.message || 'Builder POST failed' }, { status: 500 });
	}
}
