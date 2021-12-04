import type { ServerRequest } from '@sveltejs/kit/types/hooks';

export async function post(req: ServerRequest) {
	req.locals.blogAccessToken = (req.body as any).accessToken;
	return {
		status: 200
	};
}
