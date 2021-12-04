import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit/types/hooks';

export const handle: Handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	if (cookies.blogAccessToken) {
		request.locals.blogAccessToken = cookies.blogAccessToken;
	}
	const response = await resolve(request);
	if (request.locals.blogAccessToken) {
		response.headers['set-cookie'] = cookie.serialize('blogAccessToken', request.locals.blogAccessToken, {
			httpOnly: true,
			domain: '/',
			path: '/',
			sameSite: 'strict',
			expires: new Date(new Date().getTime() + (10 * 24 * 60 * 60 * 1000))
		});
	}

	return response;
};


export async function getSession(request) {
	return {
		'blogAccessToken': request.locals.blogAccessToken
	};
}
