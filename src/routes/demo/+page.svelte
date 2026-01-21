<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	let files = $state<FileList | null>(null);
	let previewUrl = $state<string | null>(null);
	let dragging = $state(false);
	let message = $state('');

	function handleDrop(e: DragEvent) {
		e.preventDefault();
		dragging = false;
		if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
			handleFiles(e.dataTransfer.files);
		}
	}

	function handleDragOver(e: DragEvent) {
		e.preventDefault();
		dragging = true;
	}

	function handleDragLeave() {
		dragging = false;
	}

	function handleFileSelect(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files && target.files.length > 0) {
			handleFiles(target.files);
		}
	}

	function handleFiles(fileList: FileList) {
		const file = fileList[0];
		const allowedTypes = ['image/jpeg', 'image/png'];
		if (file && allowedTypes.includes(file.type)) {
			files = fileList;
			previewUrl = URL.createObjectURL(file);
		} else {
			alert('JPG 또는 PNG 파일을 업로드해 주세요.');
		}
	}
</script>

<div class="inner-layout-container flex flex-col justify-center py-20">
	<div class="mx-auto w-full max-w-6xl">
		<!-- Header -->
		<div class="mb-10 text-center">
			<h1 class="text-h2 mb-2 text-neutral-dgrey">이미지 스테가노그래피</h1>
			<p class="text-r1 text-neutral-grey">
				픽셀 데이터를 조작하여 이미지 속에 비밀 메시지를 숨기세요. 아래에서 모드를 선택하여 시작할
				수 있습니다.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			<!-- Encode Card -->
			<div class="rounded-2xl border border-neutral-lgrey bg-white p-6 shadow-sm">
				<!-- Card Header -->
				<div class="mb-8 flex items-center justify-between">
					<div class="flex items-center gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-tint-5 text-primary"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h2 class="text-m1 text-neutral-dgrey">인코딩 (숨기기)</h2>
							<p class="text-r3 text-neutral-grey">이미지에 텍스트 숨기기</p>
						</div>
					</div>
					<span
						class="text-r4 rounded bg-neutral-silver px-3 py-1.5 font-bold text-neutral-grey uppercase"
						>1단계</span
					>
				</div>

				<!-- Upload Section -->
				<div class="mb-6">
					<div class="mb-3 flex items-center gap-2">
						<span class="text-m2 text-neutral-dgrey">커버 이미지 업로드</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 text-neutral-grey"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>

					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<div
						role="button"
						tabindex="0"
						class="flex h-48 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-lgrey transition-colors hover:bg-neutral-silver {dragging
							? 'border-primary bg-tint-5'
							: 'bg-neutral-silver'}"
						ondrop={handleDrop}
						ondragover={handleDragOver}
						ondragleave={handleDragLeave}
						onclick={() => document.getElementById('fileInput')?.click()}
					>
						<input
							type="file"
							id="fileInput"
							class="hidden"
							accept=".jpg, .jpeg, .png"
							onchange={handleFileSelect}
						/>

						{#if previewUrl}
							<div class="group relative h-full w-full p-2">
								<img
									src={previewUrl}
									alt="Preview"
									class="h-full w-full rounded-md object-contain"
								/>
								<div
									class="absolute inset-0 flex items-center justify-center rounded-md bg-neutral-black/60 opacity-0 transition-opacity group-hover:opacity-100"
								>
									<span class="text-m2 text-white">이미지 변경</span>
								</div>
							</div>
						{:else}
							<div
								class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-llgrey"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5 text-neutral-grey"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
									/>
								</svg>
							</div>
							<p class="text-m2 mb-1 text-neutral-dgrey">클릭하거나 이미지를 드래그하세요</p>
							<p class="text-r4 text-neutral-grey">JPG, PNG (최대 10MB)</p>
						{/if}
					</div>
				</div>

				<!-- Secret Message -->
				<div class="mb-6">
					<div class="mb-2 flex items-center justify-between">
						<span class="text-m2 text-neutral-dgrey">비밀 메시지</span>
						<span class="text-r4 font-mono tracking-wider text-neutral-grey"
							>{message.length} / 500 자</span
						>
					</div>
					<div class="relative">
						<textarea
							bind:value={message}
							maxlength="500"
							placeholder="숨길 비밀 메시지를 입력하세요..."
							class="h-32 w-full resize-none rounded-lg border border-neutral-lgrey bg-white p-4 text-sm text-neutral-dgrey placeholder-neutral-grey focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
						></textarea>
						<button
							class="absolute right-3 bottom-3 text-neutral-grey transition-colors hover:text-neutral-dgrey"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>

				<!-- Action Button -->
				<Button class="flex w-full justify-center py-3.5">
					{#snippet leftIcon()}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								clip-rule="evenodd"
							/>
						</svg>
					{/snippet}
					암호화 및 이미지 다운로드
				</Button>
			</div>

			<!-- Decode Card -->
			<div class="flex flex-col rounded-2xl border border-neutral-lgrey bg-white p-6 shadow-sm">
				<!-- Card Header -->
				<div class="mb-8 flex items-center justify-between">
					<div class="flex items-center gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-llgrey text-neutral-dgrey"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
								<path
									fill-rule="evenodd"
									d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h2 class="text-m1 text-neutral-dgrey">디코딩 (추출)</h2>
							<p class="text-r3 text-neutral-grey">숨겨진 텍스트 확인</p>
						</div>
					</div>
					<span
						class="text-r4 rounded bg-neutral-silver px-3 py-1.5 font-bold text-neutral-grey uppercase"
						>준비됨</span
					>
				</div>

				<!-- Source Image Mockup -->
				<div class="mb-6">
					<span class="text-m2 mb-3 block text-neutral-dgrey">분석할 이미지</span>
					<div
						class="group relative h-40 w-full overflow-hidden rounded-lg border border-neutral-lgrey bg-neutral-black"
					>
						<!-- Mockup Overlay -->
						<div
							class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2970&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"
						></div>

						<!-- Scanning Effect -->
						<div
							class="absolute top-1/2 left-0 h-[2px] w-full animate-pulse bg-primary/80 shadow-[0_0_15px_#4CAF4F]"
						></div>
						<div
							class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded border border-primary bg-primary/90 px-2 py-0.5 text-[10px] font-bold tracking-widest text-neutral-white"
						>
							스캔 중...
						</div>

						<!-- File info bar -->
						<div class="absolute right-2 bottom-2 left-2 flex items-center justify-between">
							<div class="flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-3 w-3 text-white"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="max-w-[150px] truncate text-xs text-white"
									>encoded_mission_brief.png</span
								>
							</div>
							<button class="rounded p-1 text-white transition-colors hover:bg-neutral-dgrey/50">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-3 w-3"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<!-- Decoded Message -->
				<div class="mb-6 flex flex-1 flex-col">
					<div class="mb-2 flex items-center justify-between">
						<span class="text-m2 text-neutral-dgrey">복호화된 메시지</span>
						<span class="text-r4 flex items-center gap-1 font-bold text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-3 w-3"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							성공</span
						>
					</div>
					<div
						class="relative flex-1 rounded-lg border border-primary/30 bg-tint-5 p-4 font-mono text-xs leading-relaxed text-neutral-dgrey"
					>
						<button
							class="absolute top-3 right-3 text-primary transition-colors hover:text-shade-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
								<path
									d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
								/>
							</svg>
						</button>
						<p class="mb-2">좌표: 45.4215 N, 75.6972 W</p>
						<p class="mb-2">암호키: DELTA-9-XT</p>
						<p>메시지 수신을 즉시 확인바람.</p>
					</div>
				</div>

				<!-- Action Buttons -->
				<div class="mt-auto grid grid-cols-2 gap-4">
					<Button variant="outline" class="flex w-full justify-center py-3">
						{#snippet leftIcon()}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
									clip-rule="evenodd"
								/>
							</svg>
						{/snippet}
						새로 스캔
					</Button>
					<Button variant="outline" class="flex w-full justify-center py-3">
						{#snippet leftIcon()}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						{/snippet}
						텍스트 저장
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
