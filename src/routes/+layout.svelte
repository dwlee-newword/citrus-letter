<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />

<div class="layout-container">
	{@render children()}
</div>

<Footer />
