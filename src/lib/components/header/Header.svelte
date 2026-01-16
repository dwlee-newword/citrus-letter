<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	/**
	 * Navigation items configuration
	 */
	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Feature', href: '#feature' },
		{ label: 'Pricing', href: '#pricing' },
		{ label: 'Contact', href: '#contact' }
	];
</script>

<header
	class="sticky top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-md transition-all duration-300"
>
	<div class="header-container flex h-[84px] items-center justify-between py-5">
		<!-- 1. Citrus Letter (Logo) -->
		<div class="flex items-center gap-2">
			<!-- Placeholder for Logo Image -->
			<span class="text-h3 text-neutral-black">Citrus Letter</span>
		</div>

		<!-- Right Side Group: Nav + Actions -->
		<div class="flex items-center gap-10">
			<!-- Navigation Items -->
			<nav>
				<ul class="items-left flex gap-6">
					{#each navItems as item}
						<li>
							<a
								href={item.href}
								class="text-r2 text-neutral-black transition-colors hover:text-primary"
								onclick={(e) => {
									const href = item.href;
									if (href.startsWith('#')) {
										e.preventDefault();
										const element = document.querySelector(href);
										if (element) {
											const headerOffset = 100; // Increased offset to account for sticky header
											const elementPosition = element.getBoundingClientRect().top + window.scrollY;
											const offsetPosition = elementPosition - headerOffset;

											window.scrollTo({
												top: offsetPosition,
												behavior: 'smooth'
											});
										}
									}
								}}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Actions -->
			<div class="flex items-center gap-4">
				<!-- 6. Register Now -->
				<Button variant="primary" size="md">Register Now</Button>
			</div>
		</div>
	</div>
</header>
