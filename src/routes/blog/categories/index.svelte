<script lang='ts'>
	import { categories } from '$lib/database';
	import CategoriesOverview from '$lib/CategoriesOverview.svelte';
</script>

<h1>Categories Index</h1>

<CategoriesOverview categories='{categories}' />
