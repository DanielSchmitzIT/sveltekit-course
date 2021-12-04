import { variables } from '$lib/variables';

export const categoryCrud = {
	loadCategories: async (request) => {
		const res = await request.fetch(`${variables.BLOG_API}/categories`, {
			headers: {
				'Authorization': `Bearer ${request.session.blogAccessToken}`
			}
		} as RequestInit);
		const data = await res.json();
		return { props: { categories: data } };
	}
};
