<script lang='ts' context='module'>
	import type { LoadInput } from '@sveltejs/kit';

	export async function load(load: LoadInput) {
		const category = await load.fetch(`http://localhost:5000/api/v1/categories/${load.page.params.categoryName}`, {
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
	import { onMount } from 'svelte';

	export let category: Category;

</script>

<h1>{category.name}</h1>
<img width='400px' src='http://localhost:5000/{category.image.path}'>

<div>
	<a href='..'>Back</a>
</div>
