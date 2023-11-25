<script>
	import "../app.css";
    import NavBar from "../lib/components/NavBar.svelte";
	export const prerender = true;
	export const trailingSlash = 'always';
</script>

<NavBar></NavBar>

<main class="">
	<slot />
</main>

<style lang="postcss">
	:root {
		@apply bg-base-200;
	}
	
	
</style>