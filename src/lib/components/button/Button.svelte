<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	// Props 인터페이스 정의
	type Props = HTMLButtonAttributes & {
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		children: Snippet;
		leftIcon?: Snippet;
		rightIcon?: Snippet;
	};

	let {
		children,
		leftIcon,
		rightIcon,
		variant = 'primary',
		size = 'md',
		class: className = '',
		...rest
	}: Props = $props();

	// 스타일 매핑
	const buttonRadius = 'rounded-xs';
	const baseStyles =
		`inline-flex items-center justify-center gap-2 ${buttonRadius} transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer`;

	const variants = {
		primary: 'bg-primary text-neutral-white hover:bg-shade-1 focus:ring-primary',
		secondary: 'bg-secondary text-neutral-white hover:bg-neutral-black focus:ring-secondary',
		outline:
			'border border-neutral-l-grey text-neutral-d-grey hover:bg-neutral-silver hover:border-neutral-grey focus:ring-neutral-grey',
		ghost: 'bg-transparent text-neutral-d-grey hover:bg-neutral-silver focus:ring-neutral-grey'
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-m3', // 14px Medium
		md: 'px-4 py-2 text-m2', // 16px Medium
		lg: 'px-6 py-3 text-m1' // 18px Medium
	};
</script>

<button
	class="{baseStyles} {variants[variant]} {sizes[size]} {className}"
	{...rest}
>
	{#if leftIcon}
		<span class="inline-flex shrink-0">{@render leftIcon()}</span>
	{/if}
	{@render children()}
	{#if rightIcon}
		<span class="inline-flex shrink-0">{@render rightIcon()}</span>
	{/if}
</button>
