<script context='module' lang='ts'>
	import type { Load } from '@sveltejs/kit/types/page';
	import { session } from '$app/stores';


	export const load: Load = (access) => {
		if (access.session.blogAccessToken) {
			return {
				status: 302,
				redirect: '/'
			};
		} else {
			return {};
		}
	};

</script>

<script lang='ts'>
	import { goto } from '$app/navigation';
	import jwtDecode from 'jwt-decode';

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
				session.update(value => {
					return {
						isLoggedIn: !!jwtDecode(unboxed.accessToken),
						email: (jwtDecode(unboxed.accessToken) as any)?.email,
						'blogAccessToken': unboxed.accessToken
					};
				});
				return fetch('http://localhost:3000/api/auth/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						accessToken: unboxed.accessToken
					})
				});
			}).then(val => {
			goto('/');
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
