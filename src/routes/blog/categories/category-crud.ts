export const categoryCrud = {
	loadCategories: async (request) => {
		const res = await request.fetch('http://localhost:5000/api/v1/categories', {
			headers: {
				'Authorization': `Bearer ${request.session.blogAccessToken}`
			}
		} as RequestInit);
		const data = await res.json();
		return { props: { categories: data } };
	}
};
