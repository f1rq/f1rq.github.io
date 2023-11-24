<script>
	import "../app.css";
    import NavBar from "../lib/components/NavBar.svelte";
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