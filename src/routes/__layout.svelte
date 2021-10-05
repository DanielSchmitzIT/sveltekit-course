<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<style lang='scss'>
    @import "../../static/global";
	</style>
</svelte:head>

<Header />

<main>
	<div class='container'>
		<slot></slot>
	</div>
</main>

<Footer />


<style>
    main {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
    }

    .container {
        width: 1280px;
        padding: 30px;
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
        margin: 20px;
    }
</style>

