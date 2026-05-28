import { appendErrorLog, isSafeSegment, readWorkspaceTextFile, writeWorkspaceTextFile } from '$stylist/server';
import { serializeUnknownError } from '$stylist/development/function/script/serialize-unknown-error';
import { json, type RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent) {
	const domain = event.url.searchParams.get('domain') ?? '';
	const family = event.url.searchParams.get('family') ?? '';

	if (!isSafeSegment(domain) || !isSafeSegment(family)) {
		return json({ error: 'Unsafe domain or family name.' }, { status: 400 });
	}

	const targetPath = `stylist-svelte/src/lib/management/data/json/component/backlog/${domain}--${family}.json`;
	const defaultPath = 'stylist-svelte/src/lib/management/data/json/component/backlog/default.json';

	try {
		const content = (() => {
			try {
				return readWorkspaceTextFile(targetPath);
			} catch {
				return readWorkspaceTextFile(defaultPath);
			}
		})();
		const document = JSON.parse(content);

		return json({
			document,
			path: `management/data/json/component/backlog/${domain}--${family}.json`
		});
	} catch (error) {
		const serializedError = serializeUnknownError(error);

		appendErrorLog({
			timestamp: new Date().toISOString(),
			source: 'server',
			routeId: event.route.id ?? null,
			url: event.url.toString(),
			method: event.request.method,
			message: serializedError.message || 'Backlog GET failed',
			stack: serializedError.stack,
			name: serializedError.name,
			status: 500,
			details: {
				params: event.params,
				isDataRequest: event.isDataRequest,
				domain,
				family
			}
		});

		return json({ error: serializedError.message || 'Backlog GET failed' }, { status: 500 });
	}
}

export async function POST(event: RequestEvent) {
	try {
		const payload = (await event.request.json()) as {
			domain?: unknown;
			family?: unknown;
			document?: unknown;
		};

		if (
			typeof payload.domain !== 'string' ||
			typeof payload.family !== 'string' ||
			typeof payload.document !== 'object' ||
			payload.document === null
		) {
			return json({ error: 'Invalid request payload.' }, { status: 400 });
		}

		if (!isSafeSegment(payload.domain) || !isSafeSegment(payload.family)) {
			return json({ error: 'Unsafe domain or family name.' }, { status: 400 });
		}

		const targetPath = `stylist-svelte/src/lib/management/data/json/component/backlog/${payload.domain}--${payload.family}.json`;
		const content = JSON.stringify(payload.document, null, 2);

		writeWorkspaceTextFile(targetPath, `${content}\n`);

		return json({
			ok: true,
			path: `management/data/json/component/backlog/${payload.domain}--${payload.family}.json`
		});
	} catch (error) {
		const serializedError = serializeUnknownError(error);

		appendErrorLog({
			timestamp: new Date().toISOString(),
			source: 'server',
			routeId: event.route.id ?? null,
			url: event.url.toString(),
			method: event.request.method,
			message: serializedError.message || 'Backlog POST failed',
			stack: serializedError.stack,
			name: serializedError.name,
			status: 500,
			details: {
				params: event.params,
				isDataRequest: event.isDataRequest
			}
		});

		return json({ error: serializedError.message || 'Backlog POST failed' }, { status: 500 });
	}
}
