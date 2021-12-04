<script lang='ts' context='module'>
	import type { LoadInput } from '@sveltejs/kit';
	import { variables } from '$lib/variables';

	export async function load(load: LoadInput) {
		const category = await load.fetch(`${variables.BLOG_API}/categories/${load.page.params.categoryName}`, {
			headers: {
				'Authorization': `Bearer ${load.session.blogAccessToken}`
			}
		}).then(val => val.json());
		return {
			props: { category }
		};
	}
</script>
<script lang='ts'>
	import { Category } from '$lib/category';

	export let category: Category;

</script>

<h1>{category.name}</h1>
<img width='400px' src='{variables.BLOG_BASE}/{category.image.path}'>

<div>
	<a href='..'>Back</a>
</div>
