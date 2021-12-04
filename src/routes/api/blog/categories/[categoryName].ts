import { categories } from '$lib/database';
import type { ServerRequest } from '@sveltejs/kit/types/hooks';

export function get(request: ServerRequest) {
	return {
		body: categories.find(category => category.title === request.params.categoryName)
	};
}
