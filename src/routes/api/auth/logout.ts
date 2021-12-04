import type { RequestHandler } from '@sveltejs/kit/types/endpoint';

export const post: RequestHandler = request => {
	request.locals.logout = true;
	return {
		status: 200
	};
};
