<nav>
	<div>
		<a href='/'>Home</a>
		<a href='/blog'>Blog</a>
	</div>
	<div>
		<a href='/about'>About</a>
		<a href='/imprint'>Imprint</a>
	</div>
</nav>

<style lang='scss'>
  @import "./static/scss/variables";

  nav {
    background: $header-color;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 3px 1px -2px rgb(0, 0, 0 / 20%), 0 2px 2px 0 rgb(0, 0, 0 / 14%), 0 1px 5px 0 rgb(0, 0, 0 / 12%);
  }

  a {
    padding: 15px;
    color: white;
    display: table-cell;

    &:hover {
      background: lighten($header-color, 5%);
    }
  }

</style>
