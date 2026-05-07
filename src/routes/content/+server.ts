import { getContentFileResponse } from '$stylist/server/function/async/get-content-file-response';
import { postContentBacklogResponse } from '$stylist/server/function/async/post-content-backlog-response';
import type { RequestEvent } from '@sveltejs/kit';

export function GET(event: RequestEvent) {
	return getContentFileResponse(event);
}

export async function POST(event: RequestEvent) {
	return postContentBacklogResponse(event);
}
