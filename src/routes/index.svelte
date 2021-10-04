<script>
	import Counter from '../UI/Counter.svelte';

	let startCount = 5;
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href='https://kit.svelte.dev'>kit.svelte.dev</a> to read the documentation</p>
<button>Test</button>
<Counter count={5} min={-5} max={10} />
<Counter count={2} min={-5} max={15} />
{startCount}
