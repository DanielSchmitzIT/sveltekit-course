<script lang='ts'>
	import { Category } from '$lib/category';

	const category: Category = {
		title: null,
		img: null
	};
</script>

<h2 class='text-center'>
	Add a new category
</h2>
<form action=''>
	<div class='form-group'>
		<label for='title'>Title</label>
		<input type='text' placeholder='Title of category (e.g. Hardware)' id='title'>
	</div>
	<div class='form-group'>
		<label for='img'>File</label>
		<input type='file' id='img' accept='image/*'>
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
  @import "static/scss/variables";


  .actions {
    display: flex;
    justify-content: space-between;
  }



</style>
