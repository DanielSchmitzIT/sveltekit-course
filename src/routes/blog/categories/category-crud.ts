export const categoryCrud = {
	loadCategories: async (request) => {
		console.log(request.session);
		const res = await request.fetch('http://localhost:5000/api/v1/categories', {
			headers: {
				'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVudGVyLXlvdXItZW1haWxAZ21haWwuY29tIiwiaWQiOjMzLCJpYXQiOjE2Mzg2MjM5MDQsImV4cCI6MTYzODYzMTEwNH0.n71xXkm9acecloY2dfav_8cX3NPORZi2JNp6lUwsr34`
			}
		} as RequestInit);
		const data = await res.json();
		return { props: { categories: data } };
	}
};
