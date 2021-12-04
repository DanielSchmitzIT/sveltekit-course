<script lang='ts' context='module'>
	import type { Load } from '@sveltejs/kit';
	import { CategoryApi } from '../../../swagger';
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

<script lang='ts'>
	import CategoriesOverview from '$lib/CategoriesOverview.svelte';

	export let categories;


	const addPost = async () => {
		const response = await fetch('/api/blog/categories', {
			method: 'POST',
			body: JSON.stringify({
				img: '/categories/hardware.jpg',
				title: 'Hardware'
			})
		});
		const addedCategory = await response.json();
		categories = [...categories, addedCategory];
	};
</script>

<div class='title'>
	<h1>Categories Index</h1>
	<a class='button' href='categories/form'>Add category</a>
</div>

<CategoriesOverview categories='{categories}' />

<button on:click={addPost}>Generate new Category</button>

<style>
    .title {
        display: flex;
        justify-content: space-between;
    }
</style>
