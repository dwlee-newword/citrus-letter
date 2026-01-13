<script lang="ts">
	import type { Snippet } from 'svelte';

	type Slide = {
		bgClass?: string;
		content: Snippet;
	};

	let { slides }: { slides: Slide[] } = $props();
	let currentIndex = $state(0);

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % slides.length;
	};

	const prevSlide = () => {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	};
</script>

<div
	class="w-full transition-colors duration-300 {slides[currentIndex]?.bgClass ??
		'bg-neutral-llgrey'}"
>
	<div class="inner-layout-container relative flex items-center justify-center">
		<!-- Previous Button -->
		<button
			class="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer p-2 text-neutral-grey transition-colors hover:text-neutral-black"
			onclick={prevSlide}
			aria-label="Previous slide"
		>
			<svg
				width="48"
				height="48"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="15 18 9 12 15 6"></polyline>
			</svg>
		</button>

		{@render slides[currentIndex]?.content()}

		<!-- Next Button -->
		<button
			class="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer p-2 text-neutral-grey transition-colors hover:text-neutral-black"
			onclick={nextSlide}
			aria-label="Next slide"
		>
			<svg
				width="48"
				height="48"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="9 18 15 12 9 6"></polyline>
			</svg>
		</button>

		<!-- Meatball UI (Pagination) -->
		<div class="absolute bottom-8 flex gap-3">
			{#each slides as _, i}
				<button
					class="cursor-pointer rounded-full transition-all duration-300 {i === currentIndex
						? 'h-3 w-3 bg-neutral-black'
						: 'h-2 w-2 bg-neutral-grey hover:bg-neutral-dgrey'}"
					onclick={() => (currentIndex = i)}
					aria-label="Go to slide {i + 1}"
				></button>
			{/each}
		</div>
	</div>
</div>
