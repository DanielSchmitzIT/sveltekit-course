<script lang='ts'>
	import { Category } from '$lib/category';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	const category: Category = {
		title: null,
		img: null
	};

	let files: FileList | [] = [];

	let submit = async ($event) => {
		const response = await fetch('/api/blog/categories', {
			method: 'POST',
			body: JSON.stringify(category)
		});
		const addedCategory = await response.json();
		await goto('/blog/categories');
	};

	$: {
		if (browser && files instanceof FileList) {
			let reader = new FileReader();
			reader.readAsDataURL(files.item(0));
			reader.onload = () => category.img = reader.result.toString();
			reader.onerror = () => console.log('Error reading file');
		}
	}
</script>

<h2 class='text-center'>
	Add a new category
</h2>
<form on:submit|preventDefault={submit}>
	<div class='form-group'>
		<label for='title'>Title</label>
		<input bind:value='{category.title}' type='text' placeholder='Title of category (e.g. Hardware)' id='title'>
	</div>
	<div class='form-group'>
		<label for='img'>File</label>
		<input bind:files type='file' id='img' accept='image/*'>
	</div>
	<div class='actions'>
		<div>
			<a class='button warn' href='/blog/categories'>Back</a>
		</div>
		<div>
			<button type='reset' class='m-r-10'>Reset</button>
			<button type='submit' class='primary'>Save</button>
		</div>
	</div>
</form>

<style lang='scss'>

  .actions {
    display: flex;
    justify-content: space-between;
  }

</style>
