import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit/types/hooks';
import jwtDecode from 'jwt-decode';

export const handle: Handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	if (cookies.blogAccessToken) {
		request.locals.blogAccessToken = cookies.blogAccessToken;
	}
	const response = await resolve(request);

	if (request.locals.logout) {
		request.locals.blogAccessToken = null;
		response.headers['set-cookie'] = cookie.serialize('blogAccessToken', null, {
			httpOnly: true,
			domain: 'http://localhost:3000/',
			path: '/',
			expires: new Date(new Date().getTime() + (10 * 24 * 60 * 60 * 1000))
		});
	}
	if (request.locals.blogAccessToken) {
		response.headers['set-cookie'] = cookie.serialize('blogAccessToken', request.locals.blogAccessToken, {
			httpOnly: true,
			domain: 'http://localhost:3000/',
			path: '/',
			expires: new Date(new Date().getTime() + (10 * 24 * 60 * 60 * 1000))
		});
	}

	return response;
};


export async function getSession(request) {
	return {
		isLoggedIn: !!jwtDecode(request.locals.blogAccessToken),
		email: (jwtDecode(request.locals.blogAccessToken) as any).email,
		'blogAccessToken': request.locals.blogAccessToken
	};
}
