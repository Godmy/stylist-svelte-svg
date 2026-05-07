import type { HandleServerError } from '@sveltejs/kit';
import { appendErrorLog } from '$stylist/server/function/script/append-error-log';
import { serializeUnknownError } from '$stylist/development/function/script/serialize-unknown-error';

export const handleError: HandleServerError = ({ error, event, status, message }) => {
	const serializedError = serializeUnknownError(error);

	appendErrorLog({
		timestamp: new Date().toISOString(),
		source: 'server',
		routeId: event.route.id ?? null,
		url: event.url.toString(),
		method: event.request.method,
		message: serializedError.message || message,
		stack: serializedError.stack,
		name: serializedError.name,
		status,
		details: {
			params: event.params,
			isDataRequest: event.isDataRequest,
			clientAddress: event.getClientAddress()
		}
	});

	return {
		message: 'Internal Error'
	};
};
