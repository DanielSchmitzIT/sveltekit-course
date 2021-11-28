import { categories } from '$lib/database';

export function get(request) {
	return {
		body: categories
	};
}


export function post({ params, body }) {
	body = JSON.parse(body);
	categories.push({
		title: body.title,
		img: body.img
	});
	return {
		body
	};
}
