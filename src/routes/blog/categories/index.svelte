<script lang='ts' context='module'>
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		console.log('here');
		const res = await fetch('/api/blog/categories');
		const data = await res.json();
		return { props: { categories: data.categories } };
	};
</script>

<script lang='ts'>
	import CategoriesOverview from '$lib/CategoriesOverview.svelte';

	export let categories;
</script>

<h1>Categories Index</h1>

<CategoriesOverview categories='{categories}' />
