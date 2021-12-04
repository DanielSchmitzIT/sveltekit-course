<script lang='ts' context='module'>
	import type { Load } from '@sveltejs/kit';
	import { session } from '$app/stores';

	export const load: Load = input => {
		return input.fetch('http://localhost:3000/api/auth/logout', {
			body: JSON.stringify({}),
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(parsed => {
				session.update(value => {
					return {};
				});
				return {
					status: 302,
					redirect: '/'
				};
			});
	};
</script>

<h3>Test</h3>
