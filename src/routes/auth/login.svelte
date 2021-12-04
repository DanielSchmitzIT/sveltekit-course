<script lang='ts'>
	export let credentials = {
		email: '',
		password: ''
	};

	function login() {
		fetch('http://localhost:5000/api/v1/auth/login', {
			body: JSON.stringify({
				email: credentials.email,
				password: credentials.password
			}),
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(result => result.json())
			.then(unboxed => {
				return fetch('http://localhost:3000/api/auth/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						accessToken: unboxed.accessToken
					})
				});
			});
	}
</script>

<style>
    .form-login {
        width: 60%;
        margin: 0 auto;
    }

    .register {
        margin-top: 10px;
    }
</style>

<h1>Login</h1>
<form on:submit|preventDefault={login}>
	<div class='form-login'>
		<div class='form-group'>
			<label for='email'>E-Mail</label>
			<input bind:value={credentials.email} type='email' id='email' placeholder='E-Mail'>
		</div>
		<div class='form-group'>
			<label for='password'>Password</label>
			<input bind:value={credentials.password} type='password' id='password' placeholder='StrongPassword'>
		</div>
		<div class='action text-center'>
			<button class='primary'>Login</button>
		</div>
		<div class='action text-center register'>
			<a href='auth/register'>Register</a>
		</div>
	</div>
</form>
