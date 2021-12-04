<script context='module' lang='ts'>
	import type { Load } from '@sveltejs/kit';
	import { CategoryApi } from '../../swagger';
	import { GetBlogConfig } from '$lib/blog-config';

	export const load: Load = input => {
		return new CategoryApi(GetBlogConfig(input.session)).getAllCategories().then(val => {
			return {
				props: {
					categories: val
				}
			};
		});
	};
</script>
<script>
	import CategoriesOverview from '$lib/CategoriesOverview.svelte';

	export let categories;
</script>

<h1>Blog</h1>
<div class='subtitle'>Categories (<a href='/blog/categories'>Open</a>)</div>
<div class='categories-wrapper'>
	<CategoriesOverview categories='{categories}' />
</div>
<div class='subtitle'>Most read</div>
<div class='post-wrapper'>

</div>

<div class='subtitle'>Recommended</div>
<div class='post-wrapper'>

</div>

<style>
    .subtitle {
        font-size: 22px;
    }
</style>
