<script>
	let count = 0;

	function incrementCount() {
		count++;
	}

	function decrementCount() {
		count--;
	}
</script>

<button on:click={decrementCount}>-</button>
{count}
<button on:click={incrementCount}>+</button>

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
