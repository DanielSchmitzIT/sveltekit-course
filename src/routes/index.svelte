<script>
	import Counter from '../UI/Counter.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<h1>Welcome to SvelteKit</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quam!</p>
<Counter />
<Footer />
<!--
<button>Test</button>
<Counter on:maxReached={(evt) => console.log(evt.detail)} count={5} min={-5} max={10} />
<Counter on:minReached={handleMinReached} on:maxReached={handleMaxReached} count={2} min={-5} max={15} />
{startCount}
-->
