<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<div class="flex w-full items-center justify-center gap-20 px-20">
	<!-- Left Side: Image -->
	<div class="flex max-w-[45%] items-start justify-start">
		<img
			src="/images/normal/image_uuid.jpg"
			alt="Insert UUID in image"
			class="aspect-1000/871 h-auto object-cover"
		/>
	</div>
	<!-- Right Side: Description Text -->
	<div class="mr-10 flex max-w-[55%] flex-col items-start gap-6 text-left">
		<h1 class="text-h2 leading-tight font-bold text-neutral-black">
			{@html $t('slides.slide1.title')}
		</h1>
		<p class="text-r1 leading-relaxed text-neutral-grey">
			{@html $t('slides.slide1.desc')}
		</p>
		<!-- list -->
		<ul class="flex list-inside list-disc flex-col gap-1">
			<li class="text-r3 text-neutral-grey">{@html $t('slides.slide1.item1')}</li>
			<li class="text-r3 text-neutral-grey">{@html $t('slides.slide1.item2')}</li>
		</ul>
	</div>
</div>
