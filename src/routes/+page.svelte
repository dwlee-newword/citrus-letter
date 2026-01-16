<script lang="ts">
	import Main from '$lib/components/slide/Slide.svelte';
</script>

{#snippet slide1()}
	<span class="text-h1 text-neutral-black">안녕하세요!</span>
{/snippet}

{#snippet slide2()}
	<span class="text-h1 text-neutral-black">반갑습니다!</span>
{/snippet}

{#snippet slide3()}
	<div class="flex flex-col items-center gap-4">
		<span class="text-h1 text-neutral-black">Citrus Letter</span>
	</div>
{/snippet}

<Main
	slides={[
		{ content: slide1, bgClass: 'bg-neutral-llgrey' },
		{ content: slide2, bgClass: 'bg-neutral-llgrey' },
		{ content: slide3, bgClass: 'bg-neutral-llgrey' }
	]}
/>

<section id="feature" class="section-container min-h-[85vh] py-20">
	<h2 class="text-h2 mb-10 text-center text-neutral-black">Feature</h2>
	<p class="text-body text-center text-neutral-grey">Feature content goes here...</p>
</section>

<section id="pricing" class="section-container min-h-[85vh] bg-neutral-llgrey py-20">
	<h2 class="text-h2 mb-10 text-center text-neutral-black">Pricing</h2>
	<p class="text-body text-center text-neutral-grey">Pricing content goes here...</p>
</section>

<section id="contact" class="section-container min-h-[85vh] py-20">
	<h2 class="text-h2 mb-10 text-center text-neutral-black">Contact</h2>
	<p class="text-body text-center text-neutral-grey">Contact content goes here...</p>
</section>
