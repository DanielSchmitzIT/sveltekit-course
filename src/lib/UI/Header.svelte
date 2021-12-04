<script lang='ts'>
	import { page, session } from '$app/stores';
	import { prefetch } from '$app/navigation';
	import { browser } from '$app/env';

	if (browser) {
		prefetch('/about');
	}
</script>

<nav>
	<div>
		<a sveltekit:prefetch class:active={$page.path === '/'} href='/'>Home</a>
		<a sveltekit:prefetch class:active={$page.path.indexOf('/blog') === 0} href='/blog'>Blog</a>
	</div>
	<div>
		<a class:active={$page.path === '/about'} href='/about'>About</a>
		<a sveltekit:prefetch class:active={$page.path === '/imprint'} href='/imprint'>Imprint</a>
		{#if ($session.isLoggedIn)}
			<a sveltekit:prefetch class:active={$page.path === '/auth/logout'} href='/auth/logout'>Logout</a>
		{:else}
			<a sveltekit:prefetch class:active={$page.path === '/auth/login'} href='/auth/login'>Login</a>
		{/if}
	</div>
</nav>

<style lang='scss'>
  @import "../../../static/scss/variables";

  nav {
    background: $header-color;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 3px 1px -2px rgb(0, 0, 0 / 20%), 0 2px 2px 0 rgb(0, 0, 0 / 14%), 0 1px 5px 0 rgb(0, 0, 0 / 12%);
  }

  a.active {
    border-bottom: 3px solid white;
  }

  a {
    padding: 15px 15px 12px;
    color: white;
    display: table-cell;

    &:hover {
      background: lighten($header-color, 5%);
    }
  }

</style>
