<script>

	export let count = 0;
	export let min = 0;
	export let max = 100;
	export let stepSize = 1;
	let maxReached = false;
	let minReached = false;


	function incrementCount() {
		count += stepSize;
		minReached = false;
		if (count > max) {
			count = max;
			maxReached = true;
		}
	}

	function decrementCount() {
		count -= stepSize;
		maxReached = false;
		if (count < min) {
			count = min;
			minReached = true;
		}
	}
</script>

<div>

	<button on:click={decrementCount} disabled='{minReached}'>-</button>
	{count}
	<button on:click={incrementCount} disabled='{maxReached}'>+</button>

</div>

<style>
    button {
        background: #efefef;
        border: 1px solid gray;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    button[disabled]:hover {
        background: inherit;
    }

    button:hover {
        background: gray;
    }
</style>
