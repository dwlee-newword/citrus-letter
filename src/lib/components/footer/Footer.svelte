<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	const sitemap = [
		{
			title: 'Company',
			links: [
				{ label: 'About Us', href: '#' },
				{ label: 'Blog', href: '#' },
				{ label: 'Contact', href: '#' },
				{ label: 'Pricing', href: '#' },
				{ label: 'Testimonials', href: '#' }
			]
		},
		{
			title: 'Support',
			links: [
				{ label: 'Help Center', href: '#' },
				{ label: 'Terms of Service', href: '#' },
				{ label: 'Legal', href: '#' },
				{ label: 'Privacy Policy', href: '#' },
				{ label: 'Status', href: '#' }
			]
		}
	];
</script>

<footer class="footer-container bg-neutral-black py-16 text-neutral-white">
	<div class="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1.5fr]">
		<!-- Brand Section -->
		<div class="flex flex-col gap-6">
			<div class="flex items-center gap-2">
				<span class="text-h3 font-semibold">Citrus Letter</span>
			</div>
			<div class="flex flex-col gap-2">
				<p class="text-r3 text-neutral-silver">Copyright © 2026 Citrus Letter.</p>
				<p class="text-r3 text-neutral-silver">All rights reserved.</p>
			</div>
			<!-- Social Icons could go here -->
		</div>

		<!-- Sitemap Columns -->
		{#each sitemap as section}
			<div class="flex flex-col gap-6">
				<h4 class="text-m1 text-neutral-white">{section.title}</h4>
				<ul class="flex flex-col gap-3">
					{#each section.links as link}
						<li>
							<a
								href={link.href}
								class="text-r3 text-neutral-silver transition-colors hover:text-primary"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}

		<!-- Email / Stay up to date -->
		<div class="flex flex-col gap-6">
			<h4 class="text-m1 text-neutral-white">Stay up to date</h4>
			<div class="flex flex-col gap-4">
				<div class="relative">
					<input
						type="email"
						placeholder="Your email address"
						class="text-r3 w-full rounded-xs bg-neutral-dgrey py-2.5 pr-12 pl-4 text-neutral-white placeholder:text-neutral-grey focus:ring-2 focus:ring-primary focus:outline-hidden"
					/>
					<div class="absolute top-1/2 right-1 -translate-y-1/2">
						<button
							class="flex h-8 w-8 items-center justify-center rounded-xs bg-primary text-neutral-white transition-colors hover:bg-shade-1"
							aria-label="Send email"
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M22 2L11 13" />
								<path d="M22 2L15 22L11 13L2 9L22 2Z" />
							</svg>
						</button>
					</div>
				</div>
				<p class="text-r4 text-neutral-silver">
					구독을 통해 Citrus Letter의 새로운 소식을 받아보세요.
				</p>
			</div>
		</div>
	</div>
</footer>
