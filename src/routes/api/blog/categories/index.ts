import { categories } from '$lib/database';

export function get(request) {
	return {
		body: {
			categories
		}
	};
}
