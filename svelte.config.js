import adapter from '@sveltejs/adapter-node';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ env: { port: process.env.PORT } }),
		target: '#svelte'
	}
}
export default config