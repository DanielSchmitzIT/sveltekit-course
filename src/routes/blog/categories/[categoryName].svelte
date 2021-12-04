<script lang='ts' context='module'>
	import type { LoadInput } from '@sveltejs/kit';
	import { variables } from '$lib/variables';
	import { CategoryApi } from '../../../swagger';
	import { GetBlogConfig } from '$lib/blog-config';

	export async function load(load: LoadInput) {
		return new CategoryApi(GetBlogConfig(load.session)).getCategoryByName({
			name: load.page.params.categoryName
		}).then(val => {
			return {
				props: { category: val }
			};
		});
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
