<script lang="ts">
	import Main from '$lib/components/slide/Slide.svelte';
	import Slide0 from '$lib/components/home/slides/Slide0.svelte';
	import Slide1 from '$lib/components/home/slides/Slide1.svelte';
	import Slide2 from '$lib/components/home/slides/Slide2.svelte';
	import Slide3 from '$lib/components/home/slides/Slide3.svelte';
	import { t } from 'svelte-i18n';
</script>

{#snippet slide0()}
	<Slide0 />
{/snippet}

{#snippet slide1()}
	<Slide1 />
{/snippet}

{#snippet slide2()}
	<Slide2 />
{/snippet}

<!-- {#snippet slide3()}
	<Slide3 />
{/snippet} -->

<Main
	slides={[
		{ content: slide0, bgClass: 'bg-neutral-white' },
		{ content: slide1, bgClass: 'bg-neutral-white' },
		{ content: slide2, bgClass: 'bg-neutral-white' }
		// { content: slide3, bgClass: 'bg-neutral-white' }
	]}
/>

<section id="feature" class="section-container min-h-[85vh] py-20">
	<h2 class="text-h2 mb-10 text-center text-neutral-black">{$t('feature.title')}</h2>
	<p class="text-body text-center text-neutral-grey">{$t('feature.desc')}</p>
</section>

<section id="pricing" class="section-container min-h-[85vh] bg-neutral-llgrey py-20">
	<h2 class="text-h2 mb-10 text-center text-neutral-black">{$t('price.title')}</h2>
	<p class="text-body text-center text-neutral-grey">{$t('price.desc')}</p>
</section>

<section id="contact" class="section-container min-h-[85vh] py-20">
	<h2 class="text-h2 mb-10 text-center text-neutral-black">{$t('contact.title')}</h2>
	<p class="text-body text-center text-neutral-grey">{$t('contact.desc')}</p>
</section>
