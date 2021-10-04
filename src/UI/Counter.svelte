<script>

	import { createEventDispatcher } from 'svelte';

	export let count = 0;
	export let min = 0;
	export let max = 100;
	export let stepSize = 1;
	let maxReached = false;
	let minReached = false;
	const dispatcher = createEventDispatcher();


	function incrementCount() {
		count += stepSize;
		minReached = false;
		if (count > max) {
			count = max;
			maxReached = true;
			dispatcher('maxReached', max);
		}
	}

	function decrementCount() {
		count -= stepSize;
		maxReached = false;
		if (count < min) {
			count = min;
			minReached = true;
			dispatcher('minReached', min);
		}
	}
</script>

<div>

	<button on:click={decrementCount} disabled='{minReached}'>-</button>
	{count}
	<button on:click={incrementCount} disabled='{maxReached}'>+</button>
	<div class='message'>
		{#if minReached}
			<small class='error'>
				The minimum value of {min} reached
			</small>
		{:else if maxReached}
			<small class='error'>
				The maximum value of {max} reached
			</small>
		{:else}
			<small class='info'>
				Click on the + or - button to increase or decrease the value by {stepSize}
			</small>
		{/if}

	</div>

</div>

<style>
    .error {
        color: red;
    }

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
