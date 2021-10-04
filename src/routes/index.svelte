<script>
	import Counter from '../UI/Counter.svelte';

	let startCount = 5;

	function handleMaxReached(evt) {
		console.log(evt);
	}

	function handleMinReached(evt) {
		console.log(evt);
	}
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href='https://kit.svelte.dev'>kit.svelte.dev</a> to read the documentation</p>
<button>Test</button>
<Counter on:maxReached={(evt) => console.log(evt.detail)} count={5} min={-5} max={10} />
<Counter on:minReached={handleMinReached} on:maxReached={handleMaxReached} count={2} min={-5} max={15} />
{startCount}
