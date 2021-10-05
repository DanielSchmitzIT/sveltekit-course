<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<h1>Imprint</h1>
<address>
	<div class='address-field'>
		<span class='field-type'>Street:</span>
		<span class='field-value'>Teststreet 12</span>
	</div>
	<div class='address-field'>
		<span class='field-type'>ZIP/Location:</span>
		<span class='field-value'>12000 / New York</span>
	</div>
	<div class='address-field'>
		<span class='field-type'>Country:</span>
		<span class='field-value'>USA</span>
	</div>
</address>

<Footer />
