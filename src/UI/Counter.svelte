<svelte:options tag='my-counter' />

<script>

	export let count = 0;
	export let min = 0;
	export let max = 100;
	export let stepSize = 1;


	function incrementCount() {
		count += stepSize;
		if (count > max) {
			count = max;
		}
	}

	function decrementCount() {
		count -= stepSize;
		if (count < min) {
			count = min;
		}
	}
</script>

<div>
	<button on:click={decrementCount}>-</button>
	{count}
	<button on:click={incrementCount}>+</button>
</div>

<style>
    button {
        background: #efefef;
        border: 1px solid gray;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background: gray;
    }
</style>
