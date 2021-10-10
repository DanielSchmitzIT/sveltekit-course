<script lang='ts'>
	export let categories = [];
</script>


<div class='categories-wrapper'>
	{#each categories as category}
		<a sveltekit:prefetch class='category' href='categories/{category.title}'>
			<img src='{category.img}' alt='Information Technology'>
			<span class='title'>
				{category.title}
			</span>
		</a>
	{/each}
</div>


<style>
    a.category {
        display: block;
        flex: 1;
        position: relative;
        max-width: 400px;
        margin-right: 20px;
        min-width: 400px;
    }

    .categories-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    img {
        width: 100%;
    }

    span.title {
        position: absolute;
        bottom: 20px;
        left: 20px;
        font-size: 22px;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        padding: 10px;
        border-radius: 10px;
        box-shadow: 2px 2px 2px black;
    }
</style>

