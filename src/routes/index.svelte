<script>

	let startCount = 5;

	function handleMaxReached(evt) {
		console.log(evt);
	}

	function handleMinReached(evt) {
		console.log(evt);
	}
</script>
<h1>Welcome to SvelteKit</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quam!</p>

<!--
<button>Test</button>
<Counter on:maxReached={(evt) => console.log(evt.detail)} count={5} min={-5} max={10} />
<Counter on:minReached={handleMinReached} on:maxReached={handleMaxReached} count={2} min={-5} max={15} />
{startCount}
-->
