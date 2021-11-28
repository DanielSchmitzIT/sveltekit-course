export const categoryCrud = {
	loadCategories: async ({ fetch }) => {
		const res = await fetch('http://localhost:3000/api/blog/categories');
		const data = await res.json();
		return { props: { categories: data } };
	}
};
