<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import '$lib/i18n';
	import { isLoading } from 'svelte-i18n';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{#if $isLoading}
	<!-- Optional: Add a loading spinner or skeleton here -->
	<div class="flex h-screen w-full items-center justify-center">Loading...</div>
{:else}
	<Header />

	<div class="layout-container">
		{@render children()}
	</div>

	<Footer />
{/if}
