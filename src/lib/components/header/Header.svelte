<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { t } from 'svelte-i18n';

	/**
	 * Navigation items configuration
	 */
	const navItems = [
		{ labelKey: 'nav.home', href: '/' },
		{ labelKey: 'nav.feature', href: '#feature' },
		{ labelKey: 'nav.pricing', href: '#pricing' },
		{ labelKey: 'nav.contact', href: '#contact' }
	];
</script>

<header
	class="sticky top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-md transition-all duration-300"
>
	<div class="header-container flex h-[84px] items-center justify-between py-5">
		<!-- 1. Citrus Letter (Logo) -->
		<div class="flex items-center gap-2">
			<img src="/images/normal/logo.png" alt="Logo" class="mb-3 h-auto w-[7%] object-cover" />
			<span class="text-h3 text-primary">Citrus Letter</span>
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
								{$t(item.labelKey)}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Actions -->
			<div class="flex items-center gap-4">
				<!-- 6. Register Now -->
				<Button variant="primary" size="md">{$t('button.register')}</Button>
			</div>
		</div>
	</div>
</header>
