<script lang='ts' context='module'>
	import type { LoadInput } from '@sveltejs/kit';

	export async function load(load: LoadInput) {
		const category = await load.fetch(`http://localhost:3000/api/blog/categories/${load.page.params.categoryName}`).then(val => val.json());
		return {
			props: { category }
		};
	}
</script>
<script lang='ts'>
	import { Category } from '$lib/category';
	import { onMount } from 'svelte';

	export let category: Category;

	onMount(() => {
		console.log(category);
	});
</script>

<h1>{category.title}</h1>
<img width='400px' src='{category.img}'>

<div>
	<a href='..'>Back</a>
</div>
